import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

function App() {
  useEffect(() => {
    hotjar.initialize(2824598, 6);
    hotjar.identify("testing my id");
  }, [])
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
    </div>
  );
}

export default App;
