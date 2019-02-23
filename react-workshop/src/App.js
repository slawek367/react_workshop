import React, { Component } from 'react';
import './App.css';
import UserList from './UserList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Router lib https://reacttraining.com/react-router/web/example/basic


const users = [
  {
    "id": 1,
    "name": "zz",
    "surrname": "bb",
    "phone": 666,
    "favourite": false
  },
  {
    "id": 2,
    "name": "xx",
    "surrname": "yy",
    "phone": 555,
    "favourite": false
  },
  {
    "id": 3,
    "name": "slawek",
    "surrname": "ydsy",
    "phone": 765656,
    "favourite": true
  },
  {
    "id": 4,
    "name": "zzz",
    "surrname": "gfsgs",
    "phone": 54245,
    "favourite": false
  },
  {
    "id": 5,
    "name": "beata",
    "surrname": "trwg",
    "phone": 536653,
    "favourite": true
  }
]

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/">Home</Link>
                  <Link to="/user_list">User list</Link>
                </div>
              </div>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/user_list" component={List} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const List = () => {
  return (
    <div className="row">
      <div className="col" align="center">
        <h2>Users</h2>
        <UserList users={users} />
      </div>
      <div className="col" align="center">
        <h2>Favourite users</h2>
        <UserList users={users.filter(user =>
          user.favourite === true
        )} />
      </div>
    </div>
  )
}


export default App;
