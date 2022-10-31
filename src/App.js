import logo from './logo.svg';
import './App.css';

function App({ domElement }) {
  const color = domElement.getAttribute("data-color")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My favorite color is {color}
        </p>
        <div style={{ backgroundColor: color, width: 100, height: 100 }} />
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
