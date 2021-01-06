import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return <li className="list-group-item" style={{textTransform: 'capitalize'}}>{ this.props.item.title }</li>
    }
}
