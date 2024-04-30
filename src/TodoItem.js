// TodoItem.js
import React from 'react';
import binImage from "./images/bin_6033424.png";

const TodoItem = ({ todo, onStatusChange, onDeleteTodo }) => {
  const { text, uniqueNo, isChecked } = todo;

  const handleCheckboxChange = () => {
    onStatusChange(uniqueNo);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(uniqueNo);
  };
    return (
      <li className="todo-item-container d-flex flex-row">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={isChecked}
          onChange={() => onStatusChange(uniqueNo)}
        />
        <div className="label-container d-flex flex-row">
          <label
            htmlFor={`checkbox${uniqueNo}`}
            className={`checkbox-label ${isChecked ? 'checked' : ''}`}
          >
            {text}
          </label>
          <div className="delete-icon-container">
            <i
              className="far fa-trash-alt delete-icon"
              onClick={() => onDeleteTodo(uniqueNo)} // Pass the uniqueNo to onDeleteTodo function
            ></i>
          </div>
        </div>
      </li>
    );
  }

export default TodoItem;
