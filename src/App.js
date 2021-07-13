import Course from "components/Course";
import Home from "components/Home";
import NavBar from "components/NavBar";
import Library from "pages/javascript/library/App";
import TicTacToe from "pages/javascript/tic-tac-toe/App";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex m-0">
      <NavBar />
      <Switch>
        <Route path={"/library"}>
          <Library />
        </Route>
        <Route path={"/tic-tac-toe"}>
          <TicTacToe />
        </Route>
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
