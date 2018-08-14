import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Todo from './Todo'
import Create from './Create'
import './App.css'

class App extends Component {
  
  render(){
    return(
      <Router>
        <div>
          <nav>
            <h1>List</h1>
            <Link to="/list">To do List</Link>
          </nav>
          <main>
            <Switch>
              <Route
                path="/list"
                component={Todo}
                />
              <Route
                path="/create"
                component={Create}
              />
            </Switch>
          </main>
        </div>
        </Router>
    )
  }
}

export default App
