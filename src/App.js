import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import { hotjar } from 'react-hotjar';
import useHotjar from 'react-use-hotjar';
const myCustomLogger = console.info;

function App() {
  // useEffect(() => {
  //   hotjar.initialize(2824598, 6);
  //   hotjar.identify("we are testing here email ", {userId: "123456789 ", extra: "extra 12"});
  // }, [])
  const { initHotjar } = useHotjar();
  const { identifyHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(2824598, 6, false, myCustomLogger);
  }, [initHotjar]);

  useEffect(() => {
    identifyHotjar(
      "user id testing 2222222",
      {
        user: { test: "testing", notNow: "not ow" }
      },
    );
  }, [identifyHotjar]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 333 <code>src/App.js</code> and save to reload.
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
