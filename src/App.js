// import logo from './logo.svg';
import './App.css';
import MuiTab from './common/MuiTab';
import TextFieldInput from './common/formfields/TextFieldInput';
import TextAreaFieldInput from './common/formfields/TextAreaFieldInput';
import EmailFieldInput from './common/formfields/EmailFieldInput';
import InputField from './common/formfields/InputField';

function App() {
  const handlechnge = (event) =>{
    const name = event.target.value;
console.log(name , "name")
  }

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
   <InputField/>
     
    </div>
  );
}

export default App;
