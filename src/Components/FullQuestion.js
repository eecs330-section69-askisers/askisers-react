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
                          title="What is the Pythagorean Theorem?" 
                          subheader="num_upvotes">
                
              </CardHeader>
              <CardContent>
                <Typography id="questionText" component="p">
                  And how can I use it to create an AI in HTML??
                </Typography> 
              </CardContent>
            </Card>;
  }
}

export default FullQuestion;
