import React, { Component } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    
    return (
      <section className="container" style={{maxWidth: '600px', margin: '0 auto'}}>
        <TodoInput />
        <h2 className="mt-5 mb-3 text-center">ToDo List</h2>
        <TodoList />
      </section>
    )
  }
}
