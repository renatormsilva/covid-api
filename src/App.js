import React from 'react';

import './App.css';
import Routes from './routes'
import StateContextProvider from './contexts/StateContextProvider'


function App() {
  return (
    <StateContextProvider>
      <Routes />
    </StateContextProvider>
  );
}

export default App;
