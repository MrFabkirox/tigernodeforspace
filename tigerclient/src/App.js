import React, { Component } from 'react';

import AppNavbar from './components/AppNavbar'

import Articles from './components/Articles/Articles'
import Home from './components/Home'

import { BrowserRouter, Route } from 'react-router-dom';

import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
  
            <AppNavbar />

            <Container>

            <BrowserRouter>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Articles" component={Articles} />
              </div>
            </BrowserRouter>

            </Container>
  
            <img src={logo} className="App-logo" alt="logo" />
  
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
