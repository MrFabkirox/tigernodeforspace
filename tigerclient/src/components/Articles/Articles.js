import React, { Component } from 'react';

import AppNavbar from '../AppNavbar'
import ArticleList from './ArticleList'
import ArticleModal from './ArticleModal'

import { Container } from 'reactstrap'
import { Provider } from 'react-redux'

import store from '../../store'

class Articles extends Component {
  render() {
    return (
      <Provider store={store}>

            <h3>Let's share some interesting articles from inside article</h3>
            <br />

            <Container>
              <ArticleList />
              <ArticleModal />
            </Container>
  
      </Provider>
    );
  }
}

export default Articles;
