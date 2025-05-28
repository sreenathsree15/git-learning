import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Branch_1 is editing this page now
        </p>
        <button>Branch_1 here</button>
        <p>
          Developer page here
        </p>
        <button>main-button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Branch_1
        </a>
      </header>
    </div>
  );
}

export default App;
