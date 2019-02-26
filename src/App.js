import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { Search, Add } from "@material-ui/icons";
import "./App.css";
import "./SideBar.css";
// import SideBar from "./Components/SideBar";
import FullQuestion from "./Components/FullQuestion";
import Answer from "./Components/Answer";
import AnswerEntry from "./Components/AnswerEntry";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import QuestionPreview from "./Components/QuestionPreview";
import { questionInfo } from "./Components/QuestionData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewQuestion: false,
      questions: questionInfo
    };
    this.viewQuestion = this.viewQuestion.bind(this);
  }

  viewQuestion() {
    this.setState({
      previewQuestion: !this.state.previewQuestion,
      questions: this.state.questions
    });
  }

  generateQuestions = () => {
    const questionArr = this.state.questions;
    let sidebar = [];

    // Outer loop to create parent
    for (let i = 0; i < questionArr.length; i++) {
      //Create the parent and add the children
      sidebar.push(
        <div className="question">
          <div className="row">
            <div className="columnA">
              <IconButton className="upvote">
                <Add />
              </IconButton>
              <br />
              <p>13</p>
            </div>
            <div className="columnB" onClick={this.viewQuestion}>
              {questionArr[i]}
            </div>
          </div>
        </div>
      );
    }
    return sidebar;
  };

  render() {
    const previewQuestion = this.state.previewQuestion;
    const questionArr = this.state.questions;

    console.log("ARRAY: " + questionArr);

    return (
      <div>
        <div id="sidebarsteve" className="Sidebar-Wrapper">
          <div className="topnav">
            <input type="text" placeholder="Find a question or topic.." />
            <IconButton>
              <Search />
            </IconButton>
          </div>
          {this.generateQuestions()}
        </div>
        <div>
          <QuestionPreview />
        </div>
      </div>
    );
  }
}

export default App;
