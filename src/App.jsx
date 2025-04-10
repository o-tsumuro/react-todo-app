import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  }

  return (
    <div>
      <h1>TODO</h1>
      <TodoForm onAdd={AddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App
