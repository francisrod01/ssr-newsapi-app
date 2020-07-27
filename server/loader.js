// Express requirements
import path from 'path';
import fs from 'fs';

// React requirements
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

// Our store, entrypoint, and manifest
import createStore from '../src/store/createStore';
import Routes from '../src/Routes';

// Some optional Redux functions related to user authentication
// import { setCurrentUser, logoutUser } from '../src/modules/auth';

/*
  A simple helper function to prepare the HTML markup. This loads:
  - Page title
  - SEO meta tags
  - Preloaded state (for Redux) depending on the current route
  - Code-split script tags depending on the current route
*/
const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>${scripts.join('')}`
  );

  return data;
};

const renderer = (req, store, context) => {
  const component = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  return component;
}

// LOADER
export default (req, res) => {
  // console.log('[SSR] req [url], [params]: ', req.url, req.params[0]);

  // const params = req.params[0].split('/');
  const params = req.url.split('/');
  const id = params[2];

  // console.log('[SSR] [params], [id]: ', params, id);

  // Create a store (with a memory history) from our current url
  // before rendering html
  const store = createStore(req.url);

  // Set cookies..
  // ....

  // We pass store to renderer...

  // Checks the given path, matches with component and returns
  // an array of items about to be rendered.
  const routes = matchRoutes(Routes, req.path);

  // Execute all loadData functions inside given urls and wrap
  // promises with new promises to be able to render pages all
  // the time, even if we get an error while loading data, we
  // will still attempt rendering page.
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  // Wait for all the loadData functions, if they are resolved,
  // send the rendered html to browser.
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    // Load in our HTML file from our build
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, htmlData) => {
      // If there's an error... serve up something nasty
      if (err) {
        console.error('Read error', err);
        return res.status(404).end();
      }

      // If the user has a cookie (i.e. they're signed in) - set them as the current user
      // Otherwise, we want to set the current state to be logged out, just in case this isn't the default
      // if ('mywebsite' in req.cookies) {
      //   store.dispatch(setCurrentUser(req.cookies.mywebsite));
      // } else {
      //   store.dispatch(logoutUser());
      // }

      // We need to tell Helmet to compute the right meta tags, title, and such
      const helmet = Helmet.renderStatic();

      // NOTE: Disable if you desire
      // Let's output the title, just to see SSR is working as intended
      console.log('THE TITLE', helmet.title.toString());

      // Pass all this nonsense into our HTML formatting function above
      const html = injectHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body: content,
        scripts: [],
        state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
      });

      // We have all the final HTML, let's send it to the user already!
      res.send(html);
    });
  });
};
