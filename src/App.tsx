import './App.css'
import TodoListProvider from './context/TodoListProvider'
import TodoLayout from './pages/TodoLayout'
function App() {
  return (
    <TodoListProvider>
      <TodoLayout />
    </TodoListProvider>
  )
}

export default App
