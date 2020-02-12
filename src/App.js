import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './containers/Home';
import TableBooking from './containers/TableBooking';
import TableUnBooking from './containers/TableUnBooking';

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking/:id" component={TableBooking} />
        <Route exact path="/unbooking/:id" component={TableUnBooking} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App;
