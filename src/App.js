import React , {Component} from 'react';
import logo from './logo.svg';
import NameCard from './Components/NameCard';
import LikesButton from './Components/LikesButton';
import DigitalClock from './Components/DigitalClock';
import CommentBox from './Components/CommentBox';
import CommentList from './Components/CommentList';
import './App.css';

const tags = ['Vue.js', 'React.js', 'Be Bound To Be Free'];
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['1st reply']
    }
    this.addComments = this.addComments.bind(this);
  }

  addComments(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <NameCard name="Young" phoneNum={131} city="广州/深圳" tags={tags}></NameCard>
        <LikesButton></LikesButton>
        <DigitalClock></DigitalClock>
        <CommentList comments={comments}></CommentList>
        <CommentBox commentsLength={comments.length} onAddComments={this.addComments}></CommentBox>
      </div>
    ); 
  }
}

export default App;
