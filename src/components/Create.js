import React, { Component } from 'react'

class Create extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="To do Name" />
                <div>
                    <input type="text" placeholder="Additional information" />
                </div>
                <button type="submit">Create</button>
            </div>
        )
    }
}

export default Create