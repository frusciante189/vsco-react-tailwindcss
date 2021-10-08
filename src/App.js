import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./Pages/Community";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Support from "./Pages/Support";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/Community">
          <Community />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
