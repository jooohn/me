import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './stores';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./containers/App'),
    childRoutes: [
      require('./routes/TimeCard')
    ]
  } ]
};

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory} routes={rootRoute} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
