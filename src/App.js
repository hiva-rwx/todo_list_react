import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <AddTodo />
      <Switch>
        <Route path="/" exact component={Todos} />
        <Route path="/about" component={About} />
      </Switch>
    </Fragment>
  );
};

export default App;
