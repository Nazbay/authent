import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
