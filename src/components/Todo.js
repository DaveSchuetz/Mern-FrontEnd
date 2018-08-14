import React, { Component } from 'react'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
            todo:[{
                name: 'Wash Dishes',
                info: 'Wash Dishes'
            }]
            
        }
    }
    render(){
        return(
            <div>
                {this.state.todo.map((item, i) =>
            <div key={i}>
                <h3>{this.state.todo.name}</h3>
                <p>{this.state.todo.info}</p>
            </div>
                )}
            </div>
        )
    }

}

export default Todo