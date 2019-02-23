import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList'

const users = [
  {
    "id": 1,
    "name": "aa",
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
    "surrname": "yy",
    "phone": 765656,
    "favourite": true
  }
]

class App extends Component {
  render() {
    return (
      <div className="App" className="container">
        <div className="row">
          <div className="col" align="center">
            <h2>Users</h2>
            <UserList users={users} />
          </div>
          <div className="col" align="center">
            <h2>Favourite users</h2>
            <UserList users={users.filter(user =>
              user.favourite == true
            )} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
