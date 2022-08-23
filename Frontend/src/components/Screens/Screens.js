import React from "react";
import { useEffect } from "react";
import "./Screens.css";
import { Provider } from "react-redux";
import { store } from "store";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import LoginPage from "components/LoginPage/LoginPage";
import { createBrowserHistory } from "history";

import setAuthToken from "utils/setAuthToken";
import { loadUser } from "store/actions/UserActions";
import { UserConstants } from "store/actions/UserConstants";

const history = createBrowserHistory();
//import { loadUser } from "store/actions/UserActions";


const Screens = (props) => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: UserConstants.LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
  );
};

export default Screens;
