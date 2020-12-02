import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/app",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/app/dashboard",
        "component": require('../dashboard').default,
        "exact": true
      },
      {
        "path": "/app/stovematch",
        "component": require('../stovematch').default,
        "exact": true
      },
      {
        "path": "/app/systemInfo",
        "component": require('../systemInfo').default,
        "exact": true
      },
      {
        "path": "/app/urgencystart",
        "component": require('../urgencystart').default,
        "exact": true
      },
      {
        "path": "/app/infomaintain",
        "component": require('../infomaintain').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/oyo/Documents/learning/z/wzy/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/helloworld",
    "component": require('../HelloWorld').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('/Users/oyo/Documents/learning/z/wzy/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
