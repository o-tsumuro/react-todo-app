import { useState, useEffect } from 'react';

export default function useTodos() {
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

  const addTodo = (text) => {
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

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  };
}