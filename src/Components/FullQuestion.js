import React, { Component } from "react";
import "../FullQuestion.css";

import ArrowUpward from '@material-ui/icons/ArrowUpward';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { IconButton } from "@material-ui/core";

class FullQuestion extends Component {
  
  render() {
    return <Card>
              <CardHeader id="cardHeader"
                          avatar={<Avatar rounded> <QuestionAnswer></QuestionAnswer> </Avatar>}
                          action={<IconButton><ArrowUpward></ArrowUpward></IconButton>}  
                          title="question_title" 
                          subheader="num_upvotes">
                
              </CardHeader>
              <CardContent>
                <Typography id="questionText" component="p">
                  question_body
                </Typography> 
              </CardContent>
            </Card>;
  }
}

export default FullQuestion;
