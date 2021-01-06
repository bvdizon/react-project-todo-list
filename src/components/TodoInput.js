import React, { Component } from 'react'

export default class TodoInput extends Component {

    render() {
        const { item, handleChange, addTodoItem, editItem } = this.props;

        return (
            <form className="mt-5" onSubmit={(e) => addTodoItem(e)}>                 
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Add a new todo item</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fa fa-sticky-note"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="add a todo item to list" name="todoItem" value={item} onChange={(e) => handleChange(e)} required/>
                    </div>

                    {
                        editItem ? (
                            <button type="add-todo" className="btn btn-block btn-success">Edit Item</button>
                        ) : (
                            <button type="add-todo" className="btn btn-block btn-info">Add Item</button>
                        )
                    }
                </div>
            </form>
        )
    }
}
