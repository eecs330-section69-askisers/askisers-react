import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AnswerEntry from "./Components/AnswerEntry";
import "./SideBar.css";
import SideBar from "./Components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and press alt f4 to save changes :).
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yay
          </a>
          <AnswerEntry/>
          <SideBar/>
        </header>
      </div>
    );
  }
}

export default App;
