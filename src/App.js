import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import 'bulma/css/bulma.css';
import './theme.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
