import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import EventForm from '../pages/EventForm';

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Header = styled.div`
  font-size: 1.5em;
  background-color: blue;
  color: #ffffff;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>New Event</Header>
        <Router>
          <Switch>
            <Route component={EventForm} path="/" />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
