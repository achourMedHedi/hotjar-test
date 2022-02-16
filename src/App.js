import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import useHotjar from 'react-use-hotjar';
import uuid from 'react-uuid';
const myCustomLogger = console.info;

function App() {
  const { identifyHotjar } = useHotjar();
  const { initHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(2262285, 6, false, myCustomLogger);
  }, [initHotjar]);
  useEffect(() => {
    identifyHotjar(
      uuid()+"test test test",
      JSON.stringify({test: "test", ex: "example"}),
      myCustomLogger
    );
  }, [identifyHotjar]);
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
