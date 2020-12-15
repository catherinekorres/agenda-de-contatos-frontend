import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import ContactList from "./pages/ContactList";
import ContactItem from "./pages/ContactItem";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/agenda" exact component={ContactList} />
      <Route path="/agenda/contato/:id" component={ContactItem} />
    </Switch>
  );
}

export default Routes;
