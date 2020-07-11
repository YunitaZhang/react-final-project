import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from './Component/Login/Login'
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


//Component paling atas yang berisi routing halaman


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c86d49',
    },
    secondary: {
      main: '#FDEECE',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/home' component={Home} />
            <Redirect from='/' to='/login' />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
