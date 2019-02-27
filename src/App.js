import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { Search, Add } from "@material-ui/icons";
import "./App.css";
import "./SideBar.css";
import QuestionPreview from "./Components/QuestionPreview";
import questionInfo from "./Components/QuestionData.json";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewQuestion: false,
      questions: questionInfo,
      activeQuestion:
        "You haven't selected a post yet! Click on one in the sidebar to view it.",
      activeDesc:
        "By the way, you look great today!",
      // State of whether the answer question modal is open or not
      addQuestion: false
    };
  }

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

  // Generates all of the question previews from the array
  // of questions in the state
  generateQuestions = () => {
    const questionArr = this.state.questions;
    let sidebar = [];

    // Outer loop to create parent
    for (let i = 0; i < questionArr.length; i++) {
      let currQuestion = questionArr[i];
      //Create the parent and add the children
      sidebar.push(
        <div className="question" key={i} onClick={this.viewQuestion}>
          <div className="row">
            <div className="columnA">
              <IconButton className="upvote">
                <Add />
              </IconButton>
              <br />
              <p>{currQuestion["upvotes"]}</p>
            </div>
            <div id="main-question" className="columnB">
              {currQuestion["question"]}
            </div>
          </div>
        </div>
      );
    }
    return sidebar;
  };

  viewQuestion = e => {
    let currKey = e.target.key;
    console.log("currkey " + currKey);
    this.setState({
      previewQuestion: !this.state.previewQuestion,
      activeQuestion: this.state.questions[currKey]["question"],
      activeDesc: this.state.questions[currKey]["desc"]
    });
  };

  render() {
    const { fullScreen } = this.props;

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
          <QuestionPreview question={this.state.activeQuestion} desc={this.state.activeDesc}/>
        </div>
      </div>
    );
  }
}

export default App;
