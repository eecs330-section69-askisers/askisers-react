import React, { Component } from "react";
import "../FullQuestion.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ArrowUpward from '@material-ui/icons/ArrowUpward';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

import orange from '@material-ui/core/colors/orange';
import { IconButton, withStyles } from "@material-ui/core";

class FullQuestion extends Component {
  
  render() {
    const { classes } = this.props;
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
