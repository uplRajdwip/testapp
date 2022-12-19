import logo from "./logo.svg";
import "./App.css";
import MuiTab from "./common/MuiTab";
import RatingCard from "./common/RatingCard";
import React, { useEffect } from "react";

function App() {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

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
      {/* <RatingCard
        value={value}
        size="small"
        maxRatingNum={7}
        disabled={false}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={0.2}
      /> */}
    </div>
  );
}

export default App;
