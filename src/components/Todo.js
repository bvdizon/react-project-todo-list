import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const { item, deleteItem } = this.props;

        return <li className="list-group-item text-capitalize d-flex justify-content-between">
            <h6>{item.title}</h6>
            <div className="manage-icons">
                <span className="mx-2 text-info" title="Edit todo item">
                    <i className="fa fa-edit fa-lg"></i>
                </span>
                <span className="mx-2 text-danger" title="Delete this todo item">
                    <i className="fa fa-trash fa-lg" onClick={() => deleteItem(item.id)}></i>
                </span>
            </div>
        </li>
    }
}
