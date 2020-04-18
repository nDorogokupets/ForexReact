import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom/css/style.css';
import './custom/js/all.js';
import Header from './components/Header';
import DisplayForex from './components/DisplayForex';
import BidsBlock from './components/Bids';
import Registration from './components/Registration';
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/index" component={DisplayForex} />
      <Route path="/index" component={BidsBlock} />
      <Route path="/register" component={Registration} />
    </BrowserRouter>
  );
}

export default App;
