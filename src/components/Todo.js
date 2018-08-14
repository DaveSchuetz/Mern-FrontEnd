import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
            todo:[{
                name: 'Clean House',
                info: 'Living room, Kitchen'
            }]
            
        }
    }
    render(){
        return(
            <div>
                {this.state.todo.map((item, i) =>
            <div key={i}>
                <h3>{item.name}</h3>
                <p>{item.info}</p>
            </div>
                )}
                <Link to="/create">
                    <button type="submit">New To do</button>
                </Link>
            </div>
        )
    }

}

export default Todo