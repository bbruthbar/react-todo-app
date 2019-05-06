import React from 'react';

const CompletedList = (props) => {
  return (
    <div>
      <h2>My Completed List:</h2>
      <ul className="todo-list">
        {props.list.map( item => (
          <li key={item.id} className="todo-list-item">
            <span>{item.todoItem}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompletedList;