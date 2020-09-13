import React from 'react'

const CommentList = ({ comments }) => {
  return (
    <div>
      <label>评论列表</label>
      <ul>
        {comments.map((comment, index) => 
          <li key={index} className="list-group-item">{comment}</li>
        )
        }
      </ul>
    </div>
  )
}

export default CommentList