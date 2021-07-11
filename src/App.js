import Course from "components/Course";
import Home from "components/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Switch>
        <Route path={`/course/:course`}>
          <Course />
        </Route>
        <Route path={`/`}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
