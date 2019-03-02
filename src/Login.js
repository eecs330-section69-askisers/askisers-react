import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div id="signUpContainer">
        <SignUpHeader title="Askisers" />
        <SignUpForm />
      </div>
    );
  }
}

const SignUpHeader = props => (
  <div id="signUpHeader">
    <div id="signUpHeaderTitle">{props.title}</div>
  </div>
);

const FormInput = props => (
  <div className="signUpRow">
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const FormCheckBox = props => (
  <div className="signUpRow">
    <input id={props.id} type="checkbox" />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

const SignUpForm = props => (
  <div id="signUpFormContainer">
    <form id="signUpForm">
      <FormInput type="text" placeholder="Your first and last name" />
      <FormInput type="password" placeholder="Username" />
      <FormInput type="password" placeholder="Password" />
      <FormCheckBox id="terms" label="I agree to the terms and conditions" />
    </form>
  </div>
);

export default Login;
