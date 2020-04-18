import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom/css/style.css';
import './custom/js/all.js';
import Header from './components/Header';
import DisplayForex from './components/DisplayForex';
import BidsBlock from './components/Bids';

function App() {
  return (
    <React.Fragment>
      <Header />
      <DisplayForex />
      <BidsBlock />
    </React.Fragment>
  );
}

export default App;
