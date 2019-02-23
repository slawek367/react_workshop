import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList'

const users = [
  {
      "id": 1,
      "name": "aa",
      "surrname": "bb",
      "phone": 666
  },
  {
      "id": 2,
      "name": "xx",
      "surrname": "yy",
      "phone": 555
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList users={users}/>
      </div>
    );
  }
}

export default App;
