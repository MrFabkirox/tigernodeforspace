// react-testing-library renders your components to document.body,
// this will ensure they' re removed after  each test.
import 'react-testing-library/cleanup-after-each'

// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect'
import { render, wait, waitForElement } from 'react-testing-library'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(
    getByText('Let\'s share some interesting articles')
  ).toBeInTheDOM()

  // ReactDOM.unmountComponentAtNode(div); replaced w cleanup-a-e
});
