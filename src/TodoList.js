import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      <h2>My To Do List:</h2>
      <ul className="todo-list">
        {props.list.map( item => (
          <li key={item.id} className="todo-list-item gridded">
            <input type="checkbox"
              checked={item.complete}
              onChange={() => props.handleToggle(item.id)}
            />
            <span>{item.todoItem}</span>
            <button onClick={() => props.handleDeleteItem(item.id)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  )

}
export default TodoList;