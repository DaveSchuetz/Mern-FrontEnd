import React, { Component } from 'react'
import axios from 'axios'
import {removeTodo} from '../actions/todo'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
            todo:[]
            
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/list')
        .then((res) =>{
            console.log(res)
            this.setState({
                todo: res.data
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.todo.map((item, i) =>
            <div key={i}>
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <input type='checkbox' />Complete<br />
                <button>Delete</button>
            </div>
                )}
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    onRemove: id => dispatch(removeTodo(id))
})
export default Todo