import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // 初回マウント時にlocalStorageから読み込む
  useEffect(() => {
    const saved = localStorage.getItem('my-todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // todosが変更されるたびに保存
  useEffect(() => {
     localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const AddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done:false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>TODO</h1>
      <TodoForm onAdd={AddTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App
