import React, { Component } from "react";
import "../AnswerEntry.css"

import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { IconButton } from "@material-ui/core";

class AnswerEntry extends Component {
  render() {
    return  <Card>
              <CardHeader id="cardHeader"
                          avatar={<Avatar rounded> <QuestionAnswer></QuestionAnswer> </Avatar>}
                          subheader="num_upvotes">
      
              </CardHeader>
              <CardContent>
                <TextField  id="answer-entry"
                            label="Enter your answer"
                            placeholder="Enter your answer"
                            margin="normal"></TextField>
              </CardContent>
              <CardActions disableActionSpacing>
                <IconButton><ArrowDownward></ArrowDownward></IconButton>
                <IconButton><ArrowUpward></ArrowUpward></IconButton>
              </CardActions>
            </Card>;
  }
}

export default AnswerEntry;
