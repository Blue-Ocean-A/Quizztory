import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import App from './components/App.jsx';
import theme from './theme';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement,
);
