import React, { Component } from "react";
import "./App.css";
import "./SideBar.css";

// import Login from "./Login";
import Dashboard from "./Dashboard";

const SignUpHeader = props => (
  <div id="signUpHeader" style={{ backgroundColor: "#E71D36" }}>
    <div id="signUpHeaderTitle" style={{ color: "#FDFFFC" }}>
      Askisers
    </div>
  </div>
);

const FormCheckBox = props => (
  <div className="signUpRow" style={{ padding: "10px" }}>
    <input style={{ border: "#E71D36" }} id={props.id} type="checkbox" />
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
      activeScreen: "Login",
      class: ""
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

  updateClass = e => {
    this.setState({ class: e.target.value });
    console.log("New class: " + this.state.class);
  };

  render() {
    console.log("Current screen: " + this.state.activeScreen);
    const activeScreen = this.state.activeScreen;

    return (
      <div>
        {activeScreen === "Login" ? (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div id="signUpContainer">
              <div id="signUpHeader" style={{ backgroundColor: "#e71d36" }}>
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
              <div className="signUpRow">
                <input
                  onChange={this.updateClass}
                  type="text"
                  placeholder="Class Name"
                />
              </div>
              <FormCheckBox
                id="terms"
                label="I agree to the terms and conditions"
              />
            </div>{" "}
            <center>
              <button
                onClick={this.openDashboard}
                id="signUpButton"
                style={{
                  backgroundColor: "#E71D36",
                  borderRadius: "5px",
                  color: "#fdffc"
                }}
              >
                Sign up
              </button>
            </center>
          </div>
        ) : activeScreen === "Dashboard" ? (
          <Dashboard name={this.state.name} class={this.state.class} />
        ) : null}
      </div>
    );
  }
}

export default App;
