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
<<<<<<< HEAD
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
              <div className="signUpRow">
                <input onChange={this.updateClass} type="text" placeholder="Class Name" />
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
=======
    const { fullScreen } = this.props;
    console.log("wtf is actually going on srsly this is fucking strange as shit");

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.addQuestion}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Create a new wahoo"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField
                onChange={this.setNewQuestion}
                id="standard-full-width"
                label="Enter your question below:"
                style={{ margin: 8, width: 500 }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />{" "}
            </DialogContentText>
            <DialogContentText>
              <TextField
                onChange={this.setNewDesc}
                id="standard-full-width"
                label="Enter a detailed description below:"
                style={{ margin: 8, width: 500 }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />{" "}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>

        <div id="sidebarsteve" className="Sidebar-Wrapper">
          <div className="topnav">
            <input type="text" placeholder="Find a question or topic.." />
            <IconButton>
              <Search />
            </IconButton>
>>>>>>> updatedstyles
          </div>
        ) : activeScreen === "Dashboard" ? (
          <Dashboard name={this.state.name} class={this.state.class}/>
        ) : null}
      </div>
    );
  }
}

export default App;
