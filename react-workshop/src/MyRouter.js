import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';

const MyRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
    </div>
  </Router>
);
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default MyRouter