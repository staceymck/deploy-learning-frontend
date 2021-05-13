import React from 'react';
import Comment from './Comment';
import camelcaseKeys from 'camelcase-keys';

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

  render() {
    return (
      <div className="ui container comments">
        {this.state.comments.map(c => <Comment comment={c} />)}
      </div>
    )
  }
}

export default CommentContainer