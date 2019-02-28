import React, { Component } from "react";
import "../QuestionPreview.css";

import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import { CardContent, Typography } from "@material-ui/core";

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
          title={this.props.question}
          subheader={this.props.votes}
        />
        <CardContent>
          <Typography component="p" children={this.props.desc}/>
        </CardContent>
      </Card>
    );
  }
}

export default QuestionPreview;
