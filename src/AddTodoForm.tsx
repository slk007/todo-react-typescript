import React, { ChangeEvent, FormEvent, useState } from "react";

export interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={changeHandler}
        placeholder="add new todo here"
      />
      <button type="submit" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
