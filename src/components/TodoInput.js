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
        console.log(this.state.todoItem);
    }

    render() {
        return (
            <form className="mt-5" onSubmit={ this.handleSubmit }>                 
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fa fa-sticky-note"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="add a todo item to list" name="todoItem" onChange={ this.handleChange }/>
                    </div>
                    <button type="add-todo" className="btn btn-block btn-primary">Add Item</button>
                </div>
            </form>
        )
    }
}
