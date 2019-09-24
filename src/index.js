import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Icon from '@material-ui/core/Icon';
import {render} from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import cyan from '@material-ui/core/colors/cyan';
import deepPurple from '@material-ui/core/colors/deepPurple';



const theme = createMuiTheme({
    palette: {
        secondary: {
          light: '#f73378',
          main: '#f50057',
          dark: '#ab003c',
          contrastText: '#fff',
        },
        primary: {
          light: '#834bff',
          main: '#651fff',
          dark: '#4615b2',
          contrastText: '#FFFFFF',
        },
      },
  });

render(
<MuiThemeProvider theme={theme}>
  
    < App />
</MuiThemeProvider>,
document.getElementById('root')
)





