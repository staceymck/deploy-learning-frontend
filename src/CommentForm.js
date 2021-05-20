import React from 'react';
import axios from 'axios';

class CommentForm extends React.Component {

  constructor() {
    super()

    this.state = this.getInitialState()
  }

  getInitialState = () => ({username: "", content: ""})

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // const configObj = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // }

    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/comments`, configObj)
    // .then(res => res.json())
    // .then(data => {
    //   this.props.addComment(data)
    // })
    // .catch(error => console.log(error))

    const comment = {
      content: this.state.content,
      username: this.state.username
    }

    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/comments`, comment)
      .then(res => this.props.addComment(res.data))
      .catch(error => console.log(error))
    
    this.setState(this.getInitialState())
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add a new comment:</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <label htmlFor="content">Comment:</label>
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default CommentForm;