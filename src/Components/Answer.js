import React, { Component } from "react";
import "../Answer.css";

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

class Answer extends Component {
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
          subheader="num_upvotes"
        />
        <CardContent>
          <Typography id="answerText" component="p">
            answer_body
          </Typography>
        </CardContent>
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
