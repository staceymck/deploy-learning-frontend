import React from 'react';

const Comment = ({comment}) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={comment.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {comment.username}
        </a>
        <div className="metadata">
          <span className="date">{comment.createdAt}</span>
        </div>
        <div className="text">
          {comment.content}
        </div>
      </div>
    </div>
  )
}

export default Comment