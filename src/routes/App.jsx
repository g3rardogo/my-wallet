import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/bootstrap_reboot.scss";
import { GlobalStyle } from "../styles/GlobalStyles";
import Login from "../pages/Login";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
