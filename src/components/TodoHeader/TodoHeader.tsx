import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

type Props = {
  setTodoLists: any;
};

const TodoHeader = (props: Props) => {
  const {todoInput , handleSubmit , handleChange} = useTodo()
  // const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="todo-header">
      <h2>Add your todos now.</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter your todo list"
          value={todoInput}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="add-todolist">
          +
        </button>
      </form>
    </div>
  );
};

export default TodoHeader;
