import React, { Component } from "react";
import "../Answer.css"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import white from '@material-ui/core/colors/white';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
  palette: {
    primary: white,
    secondary: blue
  }
});


class Answer extends Component {
  render() {
    return <div id='Answer'><div id='AnswerTitle'>Type an answer below</div><br/><TextField></TextField></div>;
  }
}

export default Answer;
