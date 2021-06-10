import logo from './logo.svg';
import './App.css';
import { FileDrop } from 'react-file-drop';
import Front from '@frontapp/plugin-sdk';


function App() {
  const styles = { border: '1px solid black', color: 'black', padding: 20 };

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
      </header>

      <div style={styles}>
        <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => console.log('onDrop!', files, event)}
        >
          Drop some files here!
        </FileDrop>
      </div>

    </div>
  );
}

export default App;
