import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventForm from '../pages/EventForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={EventForm} path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
