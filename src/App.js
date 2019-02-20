import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AnswerEntry from "./Components/AnswerEntry";
import "./SideBar.css";
import SideBar from "./Components/SideBar";
import FullQuestion from "./Components/FullQuestion";

class App extends Component {
  render() {
    return (
      <div>
        <div className="Sidebar-Wrapper">
          <SideBar />
        </div>
        <div className="Question-Wrapper">
          <FullQuestion />
        </div>
      </div>
    );
  }
}

export default App;
