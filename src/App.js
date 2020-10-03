import React , {Component} from 'react';
import logo from './logo.svg';
import NameCard from './Components/NameCard';
import LikesButton from './Components/LikesButton';
import DigitalClock from './Components/DigitalClock';
import CommentBox from './Components/CommentBox';
import CommentList from './Components/CommentList';
import ThemedBar from './Components/ThemedBar';
import ThemeContext from './theme-context';
import './App.css';

const tags = ['Vue.js', 'React.js', 'Be Bound To Be Free'];
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['1st reply'],
      theme: 'light'
    }
    this.addComments = this.addComments.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  addComments(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  changeTheme(theme) {
    this.setState({
      theme: theme
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <br />
            <a
              href="#theme-switcher"
              className="btn btn-light"
              onClick={() => {
                this.changeTheme("light");
              }}
            >
              浅色主题
            </a>
            <a
              href="#theme-switcher"
              className="btn btn-secondary"
              onClick={() => {
                this.changeTheme("dark");
              }}
            >
              深色主题
            </a>
            <ThemedBar></ThemedBar>
          </header>
          <NameCard
            name="Young"
            phoneNum={131}
            city="广州/深圳"
            tags={tags}
          ></NameCard>
          <LikesButton></LikesButton>
          <DigitalClock></DigitalClock>
          <CommentList comments={comments}></CommentList>
          <CommentBox
            commentsLength={comments.length}
            onAddComments={this.addComments}
          ></CommentBox>
        </div>
      </ThemeContext.Provider>
    ); 
  }
}

export default App;
