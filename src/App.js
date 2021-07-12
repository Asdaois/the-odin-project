import Course from "components/Course";
import Home from "components/Home";
import NavBar from "components/NavBar";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <NavBar />
      <Switch>
        <Route path={`/course/:course`}>
          <Course />
        </Route>
        <Route exact path={`/`}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
