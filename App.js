import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/layouts/Header';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
