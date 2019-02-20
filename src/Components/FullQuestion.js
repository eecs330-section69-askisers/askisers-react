import React, { Component } from "react";
import "../FullQuestion.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange
}});


class FullQuestion extends Component {
  render() {
    return <div id="fullQuestion">
              <div> 
                <h4 id="questionTitle">
                <MuiThemeProvider theme={theme}>
                  <Button id="upVote" variant="contained" color="primary" >
                    1024
                    <ArrowUpward/>
                  </Button>
                </MuiThemeProvider>
                  What is the Pythagorean Theorem?
                </h4>
              </div>
              <p id="questionBody">And how can I use it to create an AI in HTML??</p>
            </div>;
  }
}

export default FullQuestion;
