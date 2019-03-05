import React, { Component } from "react";
import { IconButton, AppBar, Toolbar, Drawer } from "@material-ui/core";
import { Search, Add} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import "./App.css";
import "./SideBar.css";
import "./Logo.css"

import { withStyles } from '@material-ui/core/styles';

import QuestionPreview from "./Components/QuestionPreview";
import questionInfo from "./Components/QuestionData.json";
import Logo from "./Components/Logo.js"

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  menuButton: {
    color: "white"
  }
})

const sideList = (
  <div className="sideDrawer">
    <div className="userName">Joe Schmoe</div>
    <div className="className">EECS 330</div>
  </div>
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currKey: 0,
      previewQuestion: false,
      questions: questionInfo,
      activeQuestion:
        "Hi " + this.props.name + ", click on a question in the sidebar to view it.",
      activeDesc: "By the way, you look great today!",
      activeUpvotes: "",
      // State of whether the answer question modal is open or not
      addQuestion: false,
      drawerOpen: false
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
        upvotes: 0
      }
    ];
    this.setState({
      questions: this.state.questions.concat(newQ),
      addQuestion: false
    });
    console.log("New set of questions: " + this.state.questions);
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

  setUpvotes = e => {
    this.setState({
      newUpvotes: e.target.value
    });
    console.log("new value of state: " + this.state.Upvotes);
  };

  // Generates all of the question previews from the array
  // of questions in the state
  generateQuestions = () => {
    const questionArr = this.state.questions;
    console.log("QUESTION ARRAY: " + questionArr[0]["question"]);
    let sidebar = [];

    // Outer loop to create parent
    for (let i = 0; i < questionArr.length; i++) {
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
      activeUpvotes: this.state.questions[currIndex]["upvotes"]
    });
  };

  render() {
    // console.log("NAME OF USER IS: " + this.props.name);
    const { fullScreen } = this.props;
    const {classes} = this.props;

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

        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton onClick={this.drawerToggle} className={classes.menuButton}><MenuIcon/></IconButton>
            <Logo/>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.drawerOpen} onClose={this.drawerToggle}>{sideList}</Drawer>

        <div id="sidebarsteve" className="Sidebar-Wrapper">
          <div className="topnav">
            <input type="text" placeholder="Find a question or topic.." />
            <IconButton>
              <Search />
            </IconButton>
          </div>
          <br />
          <center>
            <Button
              onClick={this.handleOpen}
              variant="contained"
              color="primary"
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
          <br/>
          <center>
            <Button
              variant="contained"
              color="primary"
            >
              Answer this question
            </Button>
            </center>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
