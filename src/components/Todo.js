import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return <li className="list-group-item text-capitalize">{ this.props.item.title }</li>
    }
}
