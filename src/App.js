import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/bootswatch/bootstrap.min.css';
import { NavLink, Route, Switch, HashRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import { NavigationBar } from './components/NavigationBar'
import { HomePage } from './pages/HomePage'
import './css/App.css'

class App extends Component {
  render() {
    return (
      <Router basename = "/">
        <div className="App container">
          <Header />
          <NavigationBar />
          <div className = "container content-container" style = {{marginTop: 10}}>
            <Switch>
              <Route exact path="/" component={HomePage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
