import React from 'react';
import Comment from './Comment';
import camelcaseKeys from 'camelcase-keys';
import CommentForm from './CommentForm';

class CommentContainer extends React.Component {

  state = {
    comments: [],
    error: ""
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_API_ENDPOINT)
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/comments`)
    .then(res =>res.json())
    .then(data => {
      this.setState({comments: camelcaseKeys(data)})
    })
    .catch(err => {
      this.setState({error: err.message})
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
        {this.state.error ? 
          <div>Error: {this.state.error}</div>
          :
          <div className="ui container comments">
            {this.state.comments.map(c => <Comment comment={c} />)}
          </div>
        }
        <div>
         <CommentForm addComment={this.addComment} />
       </div>
      </div>
    )
  }
}

export default CommentContainer