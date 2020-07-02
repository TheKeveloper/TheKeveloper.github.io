import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/bootswatch/bootstrap.min.css';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import pages from './config/pages'
import { NavigationBar } from './components/NavigationBar'
import './css/App.css'
import { SocialBar } from './components/SocialBar';
import ReactGA from 'react-ga'

const TRACKING_ID = "UA-44600100-3"
ReactGA.initialize(TRACKING_ID);
class App extends Component {
  render() {
    return (
      <Router basename = "/">
        <div className="App container">
          <Header />
          <SocialBar />
          <NavigationBar />
          <div className = "container content-container" style = {{marginTop: 10}}>
            <Switch>
              {pages.map(page =>
                <Route exact path = {page.route} component={page.component}/> 
              )}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
