import React, { Component } from "react";
import "./App.css";
import "./SideBar.css";
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

// <div id="signUpContainer">
//   <div id="signUpHeader">
//     <SignUpHeader />
//   </div>
//   <div className="signUpRow">
//     <input
//       onChange={this.updateName}
//       type="text"
//       placeholder="First and last name"
//     />
//   </div>
//   <div className="signUpRow">
//     <input type="text" placeholder="Username" />
//   </div>
//   <div className="signUpRow">
//     <input type="password" placeholder="Password" />
//   </div>
//   <div className="signUpRow">
//     <input onChange={this.updateClass} type="text" placeholder="Class Name" />
//   </div>
//   <FormCheckBox
//     id="terms"
//     label="I agree to the terms and conditions"
//   />
// </div>{" "}

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
            <div className="signUpRow">
              <input onChange={this.updateClass} type="text" placeholder="Class Name" />
            </div>
            <FormCheckBox
              id="terms"
              label="I agree to the terms and conditions"
            />
            < br />
            <button onClick={this.openDashboard} id="signUpButton">
              Sign up
            </button>
          </div>
        ) : <Dashboard name={this.state.name} className={this.state.class} />}

      </div>
    );
  }
}

export default App;
