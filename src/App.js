// Used to prevent googlebot from rendering our page as blank, should be imported first
import React, { Fragment, Suspense, lazy } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './redux/types';
import { logout, getUserData } from './redux/actions/userActions';
import { Helmet } from 'react-helmet';

import theme from './theme';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';
import Pace from './shared/components/Pace';

const LoggedInComponent = lazy(() => import('./logged_in/components/Main'));

const LoggedOutComponent = lazy(() => import('./logged_out/components/Main'));

// axios.defaults.baseURL =
//   "https://us-central1-project-lend-an-arm.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    // ;
    store.dispatch(logout());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route path="/c">
                <LoggedInComponent />
              </Route>
              <Route>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>
                    Lend An Arm - Nigera's First Smart BloodBank and Blood Donor
                    Community
                  </title>
                  <link rel="canonical" href="http://lendanarm.ng/" />
                </Helmet>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;
