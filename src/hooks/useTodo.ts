import { useState } from "react"
import { useTodos } from "./useTodos";

export const useTodo = () => {

  const { addTodo } = useTodos();
  const [todoInput, setTodoInput] = useState<string>('');

  const handleChange = (e: any): void => {
    setTodoInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(todoInput)
    console.log('todo-input', todoInput);
    setTodoInput("");
  };
  return { todoInput, setTodoInput, handleChange, handleSubmit }
};