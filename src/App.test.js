import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/


test('obtain information', () => {
  const root = document.createElement("div")
  ReactDOM.render(<App/>, root)

  expect(App.data).not.toBeNull();
})

