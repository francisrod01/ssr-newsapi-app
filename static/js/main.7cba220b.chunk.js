(this["webpackJsonpssr-newsapi-app"]=this["webpackJsonpssr-newsapi-app"]||[]).push([[0],{129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(17),c=t.n(r),s=t(6),i=t(15),o=t(49),m=t(19),u=t(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(33),E=t.n(d),p=t(51),h=t(52),v=t.n(h),f={apiKey:"1dae903409ca47199dac5711851de0ef"},N=function(e){return function(){var a=Object(p.a)(E.a.mark((function a(t){var l,n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=e?"https://newsapi.org/v2/top-headlines?sources=".concat(e,"&apiKey=").concat(f.apiKey):"https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(f.apiKey),a.next=3,v.a.get(l);case 3:n=a.sent,t({type:"fetch_articles",payload:n.data.articles});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=Object(i.c)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"fetch_articles":return a.payload;default:return e}}}),w=t(16),g=t(13),y=t(25),k=t(26),O=t(18),j=function(e){var a=e.handler,t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"modal1",className:"modal",style:{zIndex:1003,display:"block",opacity:1,top:10,width:"95vw",height:"95vh",maxHeight:"95vh"}},n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",onClick:a,className:"modal-close waves-effect waves-green btn red"},"Close")),n.a.createElement("div",{className:"modal-content"},n.a.createElement("h4",null,t.title),n.a.createElement("img",{className:"responsive-img",src:t.urlToImage,alt:t.title}),n.a.createElement("p",null,t.description),n.a.createElement("p",null,t.content),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"section"},n.a.createElement("a",{href:t.url,className:"waves-effect waves-light btn",target:"_blank",rel:"noopener noreferrer"},"Full Article")))),n.a.createElement("div",{role:"presentation",onClick:a,className:"modal-overlay",style:{zIndex:1002,display:"block",opacity:.5}}))};j.defaultProps={data:null,handler:null};var S=j,x=function(e){var a=Object(l.useState)(!1),t=Object(g.a)(a,2),r=t[0],c=t[1],s=Object(l.useState)({}),i=Object(g.a)(s,2),o=i[0],m=i[1],u=e.fetchArticles;return Object(l.useEffect)((function(){window.scrollTo(0,0),u()}),[u]),n.a.createElement("div",null,n.a.createElement(y.a,{key:Math.random()},n.a.createElement("title",null,"SSR Daily News - ilker ALTIN"),n.a.createElement("meta",{property:"og:title",content:"SSR Daily News - ilker ALTIN"}),n.a.createElement("meta",{name:"description",content:"Breaking news, latest articles, popular articles from most popular news websites of the world"}),n.a.createElement("meta",{name:"robots",content:"index, follow"}),n.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com"})),r?n.a.createElement(S,{handler:function(){c(!1)},data:o}):null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"section"},n.a.createElement("h3",null,"Popular Articles")),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"row"},e.articles.map((function(e){return n.a.createElement("div",{className:"col s12 m6 l6 x14",key:e.title},n.a.createElement("div",{className:"card large"},n.a.createElement("div",{className:"card-image"},n.a.createElement(k.LazyLoadImage,{alt:e.title,src:e.urlToImage})),n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},e.title)),n.a.createElement("div",{className:"card-action"},n.a.createElement(O.Button,{node:"a",className:"waves-effect waves-light orange",onClick:function(){return function(e){m(e),c(!0)}(e)}},"Read More"))))}))))))};x.defaultProps={articles:[],fetchArticles:null};var C={component:Object(m.b)((function(e){return{articles:e.articles}}),{fetchArticles:N})(x),loadData:function(e){return e.dispatch(N())}},A=function(e){var a=e.staticContext;return(void 0===a?{}:a).notFound=!0,n.a.createElement("div",{className:"ui container"},n.a.createElement("h3",null,"Page Not Found!!!"),n.a.createElement("p",null,"Please try again!"))};A.defaultProps={staticContext:{}};var T={component:A},I=function(e){var a=Object(l.useState)(!1),t=Object(g.a)(a,2),r=t[0],c=t[1],s=Object(l.useState)({}),i=Object(g.a)(s,2),o=i[0],m=i[1],u=e.articles,d=e.location,E=e.match,p=e&&u[0]&&u[0].source.name,h=e.fetchArticles;return Object(l.useEffect)((function(){window.scrollTo(0,0),E.params.id?h(E.params.id):h()}),[h,E.params.id]),n.a.createElement("div",null,n.a.createElement(y.a,{key:Math.random()},n.a.createElement("title",null,"".concat(p," Articles")),n.a.createElement("meta",{property:"og:title",content:"".concat(p," Articles List")}),n.a.createElement("meta",{name:"description",content:"Latest ".concat(p," articles, popular articles from most popular news websites of the world")}),n.a.createElement("meta",{name:"robots",content:"index, follow"}),n.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com".concat(d.pathname)})),r?n.a.createElement(S,{handler:function(){c(!1)},data:o}):null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"section"},n.a.createElement("h3",null,p)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"row"},e.articles.map((function(e){return n.a.createElement("div",{className:"col s12 m6 l6 xl4",key:e.title},n.a.createElement("div",{className:"card large"},n.a.createElement("div",{className:"card-image"},n.a.createElement(k.LazyLoadImage,{alt:e.title,src:e.urlToImage})),n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},e.title)),n.a.createElement("div",{className:"card-action"},n.a.createElement(O.Button,{node:"a",className:"btn-flat orange",onClick:function(){return function(e){m(e),c(!0)}(e)}},"Read more"))))}))))))};I.defaultProps={articles:[],location:null,match:null,fetchArticles:null};var _={component:Object(m.b)((function(e){return{articles:e.articles}}),{fetchArticles:N})(I),loadData:function(e,a){return e.dispatch(N(a))}},R=t(55),D=t(56),L=t(58),P=t(57),M=function(e){Object(L.a)(t,e);var a=Object(P.a)(t);function t(e){var l;return Object(R.a)(this,t),(l=a.call(this,e)).state={error:null,errorInfo:null},l}return Object(D.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({error:e,errorInfo:a})}},{key:"render",value:function(){var e=this.state,a=this.props.children;return e.errorInfo?n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Something went wrong"),n.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},e.error&&e.error.toString(),n.a.createElement("br",null),e.errorInfo.componentStack)):a}}]),t}(n.a.Component),F=function(){var e=Object(l.useState)(!1),a=Object(g.a)(e,2),t=a[0],r=a[1],c=function(){return r(!t)};return n.a.createElement("div",{className:"navbar-fixed"},n.a.createElement("nav",{className:"red"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/",className:"brand-logo"},"SSR News"),n.a.createElement(O.Button,{node:"a",onClick:c,className:"sidenav-trigger waves-light red right"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("div",{className:"sidenav-overlay",style:t?{display:"block",opacity:1}:null,onClick:c}),n.a.createElement("ul",{id:"slide-out",className:"sidenav",style:t?{transform:"translateX(0px)"}:null},n.a.createElement("li",null,n.a.createElement("a",{className:"subheader"},"Menu")),n.a.createElement("li",null,n.a.createElement("div",{className:"divider"})),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/",className:"item",onClick:c},"Home")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/techradar",className:"item",onClick:c},"Tech Radar")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/mashable",className:"item",onClick:c},"Mashable")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/the-verge",className:"item",onClick:c},"The Verge")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/wired",className:"item",onClick:c},"Wired")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/recode",className:"item",onClick:c},"Recode"))),n.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/techradar",className:"item"},"Tech Radar")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/mashable",className:"item"},"Mashable")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/the-verge",className:"item"},"The Verge")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/the-next-web",className:"item"},"TNW")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/wired",className:"item"},"Wired")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/articles/recode",className:"item"},"Recode")))))))},B=function(){return n.a.createElement("footer",{className:"page-footer red"},n.a.createElement("div",{className:"footer-copyright"},n.a.createElement("div",{className:"container"},"\xa9 ",(new Date).getFullYear()," SSR Daily News - ilker ALTIN",n.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ilkeraltin/react-ssr-news"},"Source Code"))))},K=(t(129),function(e){var a=e.route;return n.a.createElement("div",null,n.a.createElement(F,null),n.a.createElement("div",{className:"container"},n.a.createElement(M,null,Object(u.a)(a.routes))),n.a.createElement(B,null))});K.defaultProps={route:null};var W={component:K},z=[Object(w.a)(Object(w.a)({},W),{},{routes:[Object(w.a)(Object(w.a)({},C),{},{path:"/",exact:!0}),Object(w.a)({path:"/articles/:id"},_),Object(w.a)({},T)]})],H=(t(130),window.__PRELOADED_STATE__),J=Object(i.d)(b,H,Object(i.a)(o.a));delete window.__PRELOADED_STATE__;var V=function(){return n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,{store:J},n.a.createElement(s.a,null,Object(u.a)(z))))};c.a.hydrate(n.a.createElement(V,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,a,t){e.exports=t(131)}},[[59,1,2]]]);
//# sourceMappingURL=main.7cba220b.chunk.js.map