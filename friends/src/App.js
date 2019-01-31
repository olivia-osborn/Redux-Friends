import React, { Component } from 'react';
import './App.css';
import ListView from "./views/ListView";
import FriendForm from "./components/FriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListView/>
        <FriendForm/>
      </div>
    );
  }
}

export default App;
