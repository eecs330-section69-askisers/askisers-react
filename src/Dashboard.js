import React, { Component } from "react";
import { IconButton, AppBar, Toolbar, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Search, Add } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import "./SideBar.css";
import "./Logo.css";

import QuestionPreview from "./Components/QuestionPreview";
import Answer from "./Components/Answer";
import questionInfo from "./Components/QuestionData.json";
import Logo from "./Components/Logo.js";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  menuButton: {
    color: "white"
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    var data = [];
    var answered = [];
    for (var i = 0; i < questionInfo.length; i++) {
      data.push("");
      answered.push(false);
    }
    console.log(data);
    this.state = {
      currKey: 0,
      previewQuestion: false,
      questions: questionInfo,
      answers: data,
      answeredQs: answered,
      activeQuestion:
        "Hi " +
        this.props.name +
        ", click on a question in the sidebar to view it.",
      activeDesc: "By the way, you look great today!",
      activeUpvotes: "",
      isAnswerable: false,
      // State of whether the answer question modal is open or not
      addQuestion: false,
      addAnswer: false,
      drawerOpen: false,
      numPosts: 4,
      sorting: "chronological"
    };
  }

  drawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleOpen = () => {
    this.setState({ addQuestion: true });
  };

  handleClose = () => {
    let newQ = [
      {
        question: this.state.newQuestion,
        desc: this.state.newDesc,
        upvotes: 0,
        time: this.state.numPosts
      }
    ];
    this.setState({
      questions: this.state.questions.concat(newQ),
      addQuestion: false,
      numPosts: this.state.numPosts + 1
    });
    console.log("New set of questions: " + this.state.questions);
  };

  handleAnsOpen = () => {
    this.setState({ addAnswer: true });
  };

  handleAnsClose = () => {
    var answered = this.state.answeredQs;
    answered[this.state.currKey] = true;
    this.setState({ addAnswer: false, answeredQs: answered });
  };

  setNewQuestion = e => {
    this.setState({
      newQuestion: e.target.value
    });
    console.log("new value of state: " + this.state.newQuestion);
  };

  setNewDesc = e => {
    this.setState({
      newDesc: e.target.value
    });
    console.log("new value of state: " + this.state.newDesc);
  };

  setNewAnswer = e => {
    var data = this.state.answers;
    data[this.state.currKey] = e.target.value;
    this.setState({
      answers: data
    });
  };

  sortByUpvotes = () => {
    console.log("SORTED BY UPVOTES!");
    const questionArr = this.state.questions;

    questionArr.sort(function(a, b) {
      return a.upvotes - b.upvotes;
    });
    this.setState({ questions: questionArr });
  };

  sortByChron = () => {
    console.log("SORTED BY TIME!");
    const questionArr = this.state.questions;

    questionArr.sort(function(a, b) {
      return a.time - b.time;
    });

    this.setState({ questions: questionArr });
  };

  // Generates all of the question previews from the array
  // of questions in the state
  generateQuestions = () => {
    const questionArr = this.state.questions;
    console.log("QUESTION ARRAY: " + questionArr[0]["question"]);
    let sidebar = [];

    // Outer loop to create parent
    for (let i = questionArr.length - 1; i >= 0; i--) {
      let currQuestion = questionArr[i];
      //Create the parent and add the children
      sidebar.push(
        <div className="question">
          <div className="row">
            <div className="columnA">
              <IconButton className="upvote">
                <Add />
              </IconButton>
              <br />
              <p>{currQuestion["upvotes"]}</p>
            </div>
            <div
              id="main-question"
              className="columnB"
              value={i}
              onClick={this.viewQuestion}
            >
              {currQuestion["question"]}
            </div>
          </div>
        </div>
      );
    }
    return sidebar;
  };

  viewQuestion = e => {
    var currIndex = e.target.getAttribute("value");
    this.setState({
      currKey: currIndex,
      previewQuestion: !this.state.previewQuestion,
      activeQuestion: this.state.questions[currIndex]["question"],
      activeDesc: this.state.questions[currIndex]["desc"],
      activeUpvotes: this.state.questions[currIndex]["upvotes"],
      isAnswerable: true
    });
  };

  render() {
    const { fullScreen } = this.props;
    const { classes } = this.props;

    const sideList = (
      <div className="sideDrawer">
        <br />
        <br />
        <center>
          <Avatar>{this.props.name[0]}</Avatar>
          <h1>
            <div className="userName">{this.props.name}</div>
          </h1>
          <div className="className">{this.props.class}</div>
        </center>
      </div>
    );

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.addQuestion}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Create a new post"}
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
        <AppBar
          position="static"
          style={{ backgroundColor: "#673ab7", color: "#ffffff" }}
        >
          <Toolbar>
            <IconButton
              onClick={this.drawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.drawerToggle}>
          {sideList}
        </Drawer>
        <div id="sidebarsteve" className="Sidebar-Wrapper">
          <div className="topnav">
            <input type="text" placeholder="Find a question or topic.." />
            <IconButton>
              <Search />
            </IconButton>
          </div>
          <br />
          <center>
            <Fab variant="extended" onClick={this.sortByChron}>
              <Icon>access_time</Icon>
              Sort by Date
            </Fab>
            <Fab variant="extended" onClick={this.sortByUpvotes}>
              <Icon>arrow_upward</Icon>
              Sort by Upvotes
            </Fab>
            <br />
            <br />
            <Button
              onClick={this.handleOpen}
              variant="contained"
              style={{ backgroundColor: "#673ab7", color: "#ffffff" }}
            >
              Create a new post
            </Button>
          </center>
          <br />
          {this.generateQuestions()}
        </div>
        <div>
          <QuestionPreview
            question={this.state.activeQuestion}
            votes={this.state.activeUpvotes}
            desc={this.state.activeDesc}
          />
          <br />
          <div>
            <center>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleAnsOpen}
                style={this.state.isAnswerable ? {} : { display: "none" }}
              >
                Answer this question
              </Button>
            </center>
            <Dialog
              open={this.state.addAnswer}
              onClose={this.handleAnsClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Answering</DialogTitle>
              <DialogContent>
                <TextField
                  onChange={this.setNewAnswer}
                  id="standard-full-width"
                  label="Enter your answer below:"
                  style={{ margin: 8, width: 500 }}
                  placeholder=""
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />{" "}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleAnsClose} color="primary">
                  Done
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <br />
          <Answer
            answered={this.state.answeredQs[this.state.currKey]}
            answer={this.state.answers[this.state.currKey]}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
