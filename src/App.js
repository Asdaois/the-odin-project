import Course from "components/Course";
import Home from "components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";

function App() {
  const match = useRouteMatch();
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Switch> 
          <Route path={`${match.url}/course/:course`}>
            <Course />
          </Route>
          <Route path={`/${match.url}`}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
