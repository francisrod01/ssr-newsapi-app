/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from 'react-materialize';

import { fetchArticles } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const readArticle = article => {
    setCurrentArticle(article);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const renderArticles = () => {
    return props.articles.map(article => (
      <div className="col s12 m6 l6 x14" key={article.title}>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage
              alt={article.title}
              src={article.urlToImage}
            />
          </div>

          <div className="card-content">
            <span className="card-title">{article.title}</span>
          </div>

          <div className="card-action">
            <Button
              node="a"
              className="waves-effect waves-light orange"
              onClick={() => readArticle(article)}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    ));
  }

  const head = () => (
    <Helmet key={Math.random()}>
      <title>SSR Daily News - ilker ALTIN</title>
      <meta property="og:title" content="SSR Daily News - ilker ALTIN" />
      <meta
        name="description"
        content="Breaking news, latest articles, popular articles from most popular news websites of the world"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://react-ssr-ilker.herokuapp.com" />
    </Helmet>
  );

  const { fetchArticles: loadArticles } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);

  return (
    <div>
      {head()}
      {modal ? <ArticleDetailModal handler={closeModal} data={currentArticle} /> : null}
      <div className="row">
        <div className="section">
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" />

        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  articles: state.articles,
});

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment,
  // app is not rendered yet, so we need to use store itself to load data.

  // Manually dispatch a network request
  return store.dispatch(fetchArticles());
}

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func,
}

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null,
}

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
}