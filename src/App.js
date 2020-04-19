import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom/css/style.css';
import './custom/js/all.js';
import Header from './components/Header';
import DisplayForex from './components/DisplayForex';
import BidsBlock from './components/Bids';
import Register from './components/Registration';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forexList: [],
      apiWorker: null
    }
    this.getList = this.getList.bind(this)
  }
  componentDidMount() {
    this.getList().then(() => {
      this.setState({
        apiWorker: setInterval(this.getList, 1000)
      })
    }
    )
  }
  getList() {
    return fetch('https://financialmodelingprep.com/api/v3/forex')
    .then((response) => { return response.json() })
      .then((data) => {
        this.setState({ forexList: data.forexList })
      })
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={props =>
          <React.Fragment>
            <DisplayForex list={this.state.forexList} />
            <BidsBlock />
          </React.Fragment>
        } />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}

export default App;
