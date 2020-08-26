import React from 'react';

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }

  increaseLikes() {
    this.setState((state) => {
      return {
        likes:state.likes++
      }
    })
  }

  render() {
    return (
      <div className="likes-button-component">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => { this.increaseLikes() }}
        >
          <span role="img" aria-label="Likes">👍</span>{this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton