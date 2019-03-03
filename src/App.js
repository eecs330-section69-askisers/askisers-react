import React, { Component } from "react";
import "./App.css";
import "./SideBar.css";

// import Login from "./Login";
import Dashboard from "./Dashboard";

const SignUpHeader = props => (
  <div id="signUpHeader">
    <div id="signUpHeaderTitle">Askisers</div>
  </div>
);

const FormCheckBox = props => (
  <div className="signUpRow">
    <input id={props.id} type="checkbox" />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      activeScreen: "Login"
    };
  }

  openDashboard = () => {
    console.log("Head over to dashboard");
    this.setState({ activeScreen: "Dashboard" });
  };

  updateName = e => {
    this.setState({ name: e.target.value });
    console.log("New name: " + this.state.name);
  };

  render() {
    console.log("Current screen: " + this.state.activeScreen);
    const activeScreen = this.state.activeScreen;

    return (
      <div>
        {activeScreen === "Login" ? (
          <div>
            <div id="signUpContainer">
              <div id="signUpHeader">
                <SignUpHeader />
              </div>
              <div className="signUpRow">
                <input
                  onChange={this.updateName}
                  type="text"
                  placeholder="First and last name"
                />
              </div>
              <div className="signUpRow">
                <input type="text" placeholder="Username" />
              </div>
              <div className="signUpRow">
                <input type="password" placeholder="Password" />
              </div>
              <FormCheckBox
                id="terms"
                label="I agree to the terms and conditions"
              />
            </div>{" "}
            <center>
              <button onClick={this.openDashboard} id="signUpButton">
                Sign up
              </button>
            </center>
          </div>
        ) : activeScreen === "Dashboard" ? (
          <Dashboard name={this.state.name} />
        ) : null}
      </div>
    );
  }
}

export default App;
