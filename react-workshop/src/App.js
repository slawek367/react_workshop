import React, { Component } from 'react';
import './App.css';
import UserList from './UserList'

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
      </div>
    );
  }
}

export default App;
