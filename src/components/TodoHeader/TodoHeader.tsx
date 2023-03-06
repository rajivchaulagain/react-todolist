import { useTodo } from "../../hooks/useTodo";
import { useTodos } from "../../hooks/useTodos";

type Props = {
  setTodoLists: any;
};

const TodoHeader = (props: Props) => {
  const {todoInput , handleSubmit , handleChange} = useTodo()
  const {deleteAll} = useTodos()
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
        <button type="submit" onClick={deleteAll} className="add-todolist">
          Reset
        </button>
      </form>
    </div>
  );
};

export default TodoHeader;
