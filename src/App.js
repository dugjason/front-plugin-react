import logo from './logo.svg';
import './App.css';
import Front from '@frontapp/plugin-sdk';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {
          console.log('I was clicked')
          Front.openUrl('https://frontapp.com')
        }}>
          Click me to open in a new window
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />
        <p>Below is an anchor wrapped in a div. Anchor takes us to reactjs.org. div onClick takes us to example.com</p>
        <div onClick={() => {
          console.log('div was clicked')
          Front.openUrl('https://example.com')
        }}>
          <a 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Click this. 
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
