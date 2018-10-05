import React, { Component } from 'react';
import Routes from './Routes';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { light } from './themes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={light}>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
