import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 
          <code>src/App.tsx</code> 
          and save to reload.
        </p>
        <Button
          handleClick={(): void => {
            alert('hellow please work');
          }}
          isPrimary
        >
          Click me
        </Button>
        <Button
          handleClick={(): void => {
            alert('hellow please work');
          }}
          isSecondary
        >
          Click me
        </Button>
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
};

export default App;
