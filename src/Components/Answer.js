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
      upvotes: 0,
      upvoted: false,
      downvoted:false,
    };
  }

  resetUpvotes = () => {
    this.setState({upvotes: 0});
  }

  handleUpvote = () => {
    var upvoteNum = this.state.upvotes;
    var isUpvoted = this.state.upvoted;
    var isDownvoted = this.state.downvoted;
    if(isUpvoted) {
      upvoteNum -= 1;
      isUpvoted = false;
      isDownvoted = false;
    }
    else if(isDownvoted) {
      upvoteNum += 2;
      isUpvoted = true;
      isDownvoted = false;
    }
    else {
      upvoteNum += 1;
      isUpvoted = true;
      isDownvoted = false;
    }
    this.setState({upvotes: upvoteNum, upvoted: isUpvoted, downvoted: isDownvoted});
  }

  handleDownvote = () => {
    var upvoteNum = this.state.upvotes;
    var isUpvoted = this.state.upvoted;
    var isDownvoted = this.state.downvoted;
    if(isUpvoted) {
      upvoteNum -= 2;
      isUpvoted = false;
      isDownvoted = true;
    }
    else if(isDownvoted) {
      upvoteNum += 1;
      isUpvoted = false;
      isDownvoted = false;
    }
    else {
      upvoteNum -= 1;
      isUpvoted = false;
      isDownvoted = true;
    }
    this.setState({upvotes: upvoteNum, upvoted: isUpvoted, downvoted: isDownvoted});
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
          subheader={this.state.upvotes}
        />
        <CardContent onChange={this.resetUpvotes}>
          {this.props.answerText}
        </CardContent>
        <CardActions disableActionSpacing>
        <IconButton onClick={this.handleUpvote}>
            <Add/>
          </IconButton>
          <IconButton onClick={this.handleDownvote}>
            <Remove/>
          </IconButton>
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default Answer;
