import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ArticleList from './components/ArticleList'
import ArticleModal from './components/ArticleModal'
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
              <ArticleList />
              <ArticleModal />
            </Container>
  
            <img src={logo} className="App-logo" alt="logo" />
  
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
