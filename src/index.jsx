import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
