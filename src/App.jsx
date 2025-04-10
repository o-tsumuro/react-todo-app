import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
    <div style={{ paddingBottom: '60px' }}>
      <Header />
      <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <TodoForm onAdd={AddTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App
