import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App top">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App