import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],
    item: "",
    editItem: false
  }

  handleChange = e => { 
    this.setState({
        item: e.target.value
    })
  }

  addTodoItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: uuidv4(),
      editItem: false
    }

    this.setState({
      items: [...this.state.items, newItem],
      item: '',
      editItem: false
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

  updateItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })

  }

  render() {
    
    return (
      <section className="container" style={{maxWidth: '600px', margin: '0 auto'}}>
        <h2 className="mt-5 mb-3 text-center">My ToDo List</h2>
        <TodoInput addTodoItem={this.addTodoItem} handleChange={this.handleChange} item={this.state.item} editItem={this.state.editItem} />
        <h2 className="mt-5 mb-3 text-center">Things to work on ... </h2>
        <TodoList items={this.state.items} clearList={this.clearList} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
      </section>
    )
  }
}
