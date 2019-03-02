import React, { Component } from "react";
import "./App.css";
import "./SideBar.css";

import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: "Login"
    };
  }

  openDashboard = () => {
    console.log("Head over to dashboard");
    this.setState({ activeScreen: "Dashboard" });
  };

  render() {
    console.log("Current screen: " + this.state.activeScreen);
    const activeScreen = this.state.activeScreen;

    return (
      <div>
        {activeScreen === "Login" ? (
          <div>
            <Login />
            <center>
              <button onClick={this.openDashboard} id="signUpButton">
                Sign up
              </button>
            </center>
          </div>
        ) : activeScreen === "Dashboard" ? (
          <Dashboard />
        ) : null}
      </div>
    );
  }
}

export default App;
