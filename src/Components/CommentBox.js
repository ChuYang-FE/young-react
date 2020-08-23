import React from "react";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.onAddComments(this.textInput.value);
    this.textInput.value = '';
    e.preventDefault();
  }
  render() {
    return(
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容：</label>
          <input type="text" className="form-control" placeholder="请输入留言" ref={(textInput) => {this.textInput = textInput}}/>
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
        <p>已有{this.props.commentsLength}条留言</p>
      </form>
    )
  }
}

export default CommentBox