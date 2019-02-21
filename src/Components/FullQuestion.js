import React, { Component } from "react";
import "../FullQuestion.css";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { IconButton } from "@material-ui/core";

import Answer from "./Answer";
import AnswerEntry from "./AnswerEntry";

class FullQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAnswer: false
    };
    this.editAnswer = this.editAnswer.bind(this);
  }

  editAnswer() {
    console.log("Edit the answer!");
  }

  render() {
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
          action={
            <IconButton>
              <ArrowUpward />
            </IconButton>
          }
          title="How do you perform the Pythagorean Theorem? What does it do?"
          subheader="13 upvotes"
        />
        <CardContent>
          <Typography id="questionText" component="p">
            I have no idea what the pythagorean theorem is pls help I am
            panicking the math exam is tomorrow and I do not understand it at
            all
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default FullQuestion;
