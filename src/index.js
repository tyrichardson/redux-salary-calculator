import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import EmployeeReducer from './reducers/EmployeeReducer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: grey[700]
    },
  }
})

const store = createStore(
  EmployeeReducer
);

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('root')
);

registerServiceWorker();
