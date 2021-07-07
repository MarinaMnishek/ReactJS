// import logo from './logo.svg';
import './App.css';

function Message(props) {
  return <h2 className="header-h2"> {props.text} </h2>
} 

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

        <Message text="Начало работы" />
        <p className="example-text">{props.text1}</p>

      </header>
    </div>
  );
}

export default App;
