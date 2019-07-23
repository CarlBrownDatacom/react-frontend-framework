import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';

import logo from './logo.svg';
import './App.css';

import Button from './components/button';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ThemeProvider
      theme={{
        ...themeContext,
        colors: { ...themeContext.colors, primaryColor: 'red' },
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button
            handleClick={e => {
              alert('hellow please work');
            }}
            isPrimary
          >
            Click me
          </Button>
          <Button
            handleClick={e => {
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
    </ThemeProvider>
  );
};

export default App;
