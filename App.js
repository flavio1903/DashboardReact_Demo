import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/layouts/Header';
import './styles/main.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <div className="content">
          asdsadsadsa
        </div>
      </div>
    );
  }
}

export default App;
