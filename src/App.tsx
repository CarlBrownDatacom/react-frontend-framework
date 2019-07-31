import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

import Button from './components/button';
import Icon from './components/icon';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <Icon name="logo" />
        <Button
          handleClick={(): void => {
            alert('remove this component');
          }}
          isPrimary
        >
          Click me
        </Button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
