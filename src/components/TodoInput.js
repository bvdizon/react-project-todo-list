import React, { Component } from 'react'

export default class TodoInput extends Component {
    state = {
        todoItem: "",
    }

    handleChange = e => { 
        this.setState({
            todoItem: e.target.value
        })
    }

    handleSubmit = e => { 
        e.preventDefault();
        this.props.addTodoItem(this.state.todoItem);

        this.setState({
            todoItem: "",
        })
    }

    render() {
        return (
            <form className="mt-5" onSubmit={ this.handleSubmit }>                 
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Add a new todo item</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fa fa-sticky-note"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="add a todo item to list" name="todoItem" value={ this.state.todoItem } onChange={ this.handleChange }/>
                    </div>
                    <button type="add-todo" className="btn btn-block btn-info">Add Item</button>
                </div>
            </form>
        )
    }
}
