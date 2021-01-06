import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],

  }

  addTodoItem = item => {
    const newItem = {
      title: item,
      id: uuidv4(),
    }

    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  clearList = () => {
    this.setState({
      items: [],
    })
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    })
  }

  render() {
    
    return (
      <section className="container" style={{maxWidth: '600px', margin: '0 auto'}}>
        <h2 className="mt-5 mb-3 text-center">My ToDo List</h2>
        <TodoInput addTodoItem={ this.addTodoItem }/>
        <h2 className="mt-5 mb-3 text-center">Things to work on ... </h2>
        <TodoList items={this.state.items} clearList={this.clearList} deleteItem={this.deleteItem} />
      </section>
    )
  }
}
