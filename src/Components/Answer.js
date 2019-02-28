import React, { Component } from "react";
import "../AnswerEntry.css";
import "../SideBar.css";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerState: false
    };
    this.editAnswer = this.editAnswer.bind(this);
  }

  editAnswer() {
    this.setState({
      answerState: true
    });
  }

  render() {
    let answer;
    console.log(this.state.answerState);
    if (!this.state.answerState) {
      answer = (
        <div>
          <Typography className="unanswered">
            There isn't an answer here yet!
          </Typography>
          <button className="button" onClick={this.editAnswer}>
            Answer this question!
          </button>
        </div>
      );
    } else {
      answer = (
        <TextField
          id="answer-entry"
          label="Enter your answer"
          placeholder="Enter your answer"
          margin="normal"
        />
      );
    }
    return (
      <Card>
        <CardHeader
          id="cardHeader"
          avatar={
            <Avatar rounded>
              {" "}
              <QuestionAnswer />{" "}
            </Avatar>
          }
          subheader="num_upvotes"
        />
        <CardContent>{answer}</CardContent>
        <CardActions disableActionSpacing>
          <IconButton>
            <ArrowDownward />
          </IconButton>
          <IconButton>
            <ArrowUpward />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default Answer;
