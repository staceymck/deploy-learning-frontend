import React from 'react';
import camelcaseKeys from 'camelcase-keys';
import axios from 'axios'; //convention to import third-party packages above my components
import Comment from './Comment';
import CommentForm from './CommentForm';


class CommentContainer extends React.Component {

  state = {
    comments: [],
    error: ""
  }

  // componentDidMount() {
  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/comments`)
  //   .then(res =>res.json())
  //   .then(data => {
  //     this.setState({comments: camelcaseKeys(data)})
  //   })
  //   .catch(err => {
  //     this.setState({error: err.message})
  //   })
  // }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/comments`)
    .then(res => {
      this.setState({comments: camelcaseKeys(res.data)})
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
  
  displayError = (error) => {
    this.setState({
      error: error
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
         <CommentForm addComment={this.addComment} handleError={this.displayError} />
       </div>
      </div>
    )
  }
}

export default CommentContainer