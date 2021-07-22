import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/bootstrap_reboot.scss";
import { GlobalStyle } from "../styles/GlobalStyles";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
