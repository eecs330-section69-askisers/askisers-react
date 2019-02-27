import React, { Component } from "react";
import "../QuestionPreview.css";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import { IconButton } from "@material-ui/core";

class QuestionPreview extends Component {
  render() {
    console.log("Question: " + this.props.question);
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
          title={this.props.question}
          subheader={0}
        />
      </Card>
    );
  }
}

export default QuestionPreview;
