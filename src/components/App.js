import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Todo from './Todo'
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
                exact path="/list"
                component={Todo}
                />
            </Switch>
          </main>
        </div>
        </Router>
    )
  }
}

export default App
