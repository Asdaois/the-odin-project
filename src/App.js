import Home from "components/Home";
import Course from "components/Course";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Switch>
          <Route path="/course/:course">
            <Course />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
