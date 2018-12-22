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

            <p style={{ 'text-align': 'center' }}>
              We can not know anything for certain, but sharing, observing, questionning will enrich us all.
            </p>
            
            <h3>Please, share if you feel like.</h3>
            <br />

            <Container>
              <ArticleModal />
              <ArticleList />
            </Container>
  
      </Provider>
    );
  }
}

export default Articles;
