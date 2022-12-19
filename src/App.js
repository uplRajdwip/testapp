import logo from "./logo.svg";
import "./App.css";
import MuiTab from "./common/MuiTab";
import Stepper from "./common/Stepper";

function App() {
  const steps = [
    "first step",
    "second step",
    "third step",
    "four step",
    "fifth step",
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <MuiTab /> */}
      <Stepper steps={steps} />
    </div>
  );
}

export default App;
