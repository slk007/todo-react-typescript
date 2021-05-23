import React from "react";
import "./TodoListItem.css";

export interface Props {
  todo: Todo;
  toggleTodo: toggleTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.completed ? "completed" : undefined}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
