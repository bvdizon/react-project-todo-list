import React, { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </ul> 
        )
    }
}
