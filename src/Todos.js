import React, { Component } from 'react';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

class Todos extends Component {
  state = {
    todos: [],
    input: ''
  };
  componentDidMount() {
    if (localStorage.getItem('myTodosList') != null) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('myTodosList')) 
      })
    }
  };
  componentDidUpdate() {
    localStorage.setItem('myTodosList', JSON.stringify(this.state.todos))
  };
  handleChange = e => {
    let { value } = e.target;
    this.setState({
      input: value
    })
  };
  handleAddTodo = () => {
    this.setState(prevState => {
      if (this.state.input !== ''){
        let idTimeStamp = new Date();
        return {
          todos: prevState.todos.concat([{
            todoItem: this.state.input,
            id: idTimeStamp.getTime(),
            completed: false
          }]),
          input: ''
        }
      } else {
        alert("Enter something to do.");
      }
    })
  };
  handleClearTodo = () => {
    this.setState({
      todos: []
    });
  };
  handleToggle = (todoItemId) => {
    this.setState( prevState => {
      let updatedTodos = prevState.todos.map(item => {
        if(item.id === todoItemId) {
          item.completed = !item.completed
        }
        return item;
      });
      return {
        todos: updatedTodos
      }

    })
  };
  handleDeleteItem = (todoItemId) => {
    this.setState(prevState => {
      let updatedTodos = prevState.todos.filter( item => item.id !== todoItemId);
      return {
        todos: updatedTodos
      }
    })
  };
  render() {
    return (
      <div className="wrapper">
        <p>View Code on <a rel="noopener noreferrer" href="https://github.com/bbruthbar/react-todo-app" target="_blank">
        My Github account</a>.</p>
        <hr />
        <input
          type="text"
          name="todoItem"
          placeholder="Enter what you gotta do..."
          value={this.state.input}
          onChange={this.handleChange}
          required
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <button onClick={this.handleClearTodo}>Clear</button>
        <TodoList 
          list = {this.state.todos.filter(itemTodo => !itemTodo.completed)} 
          handleToggle = {this.handleToggle}
          handleDeleteItem = {this.handleDeleteItem}
        />
        <CompletedList
          list={this.state.todos.filter(itemTodo => itemTodo.completed)}
        />
      </div>
    )

  }

}

export default Todos;