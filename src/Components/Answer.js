import React, { Component } from "react";
import "../AnswerEntry.css";
import "../SideBar.css";

import { Remove, Add} from "@material-ui/icons";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerState: false,
      answered: false,
      answer: ""
    };
  }

  render() {
    
    return (
      <div>
      <Card style={this.props.answered ? {} : { display: 'none' }}>
        <CardHeader
          id="cardHeader"
          avatar={
            <Avatar rounded>
              {" "}
              <QuestionAnswer />{" "}
            </Avatar>
          }
          subheader="0"
        />
        <CardContent>
          {this.props.answer}
        </CardContent>
        <CardActions disableActionSpacing>
        <IconButton>
            <Add/>
          </IconButton>
          <IconButton>
            <Remove/>
          </IconButton>
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default Answer;
