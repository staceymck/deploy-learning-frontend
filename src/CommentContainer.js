import React from 'react';
import Comment from './Comment';
import camelcaseKeys from 'camelcase-keys';
import CommentForm from './CommentForm';

class CommentContainer extends React.Component {

  state = {
    comments: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/comments")
    .then(res =>res.json())
    .then(data => {
      this.setState({comments: camelcaseKeys(data)})
    })
  }
  

  addComment = (comment) => {
    this.setState(state => {
      return {
        comments: [...state.comments, comment]
      }
    })
  }

  render() {
    return (
      <div>
        <div className="ui container comments">
          {this.state.comments.map(c => <Comment comment={c} />)}
        </div>
        <div>
         <CommentForm addComment={this.addComment} />
       </div>
      </div>
    )
  }
}

export default CommentContainer