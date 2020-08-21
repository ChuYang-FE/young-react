import React from 'react';
import logo from './logo.svg';
import NameCard from './Components/NameCard';
import './App.css';

const tags = ['Vue.js', 'React.js', 'Be Bound To Be Free'];
function App() {
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
    </div>
  );
}

export default App;
