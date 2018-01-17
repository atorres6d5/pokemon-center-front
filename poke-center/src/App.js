import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/dashboard'





class App extends Component {


  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Dashboard/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
