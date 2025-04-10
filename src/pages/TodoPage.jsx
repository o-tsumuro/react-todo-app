import { useState } from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage({ todos, addTodo, toggleTodo, deleteTodo }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'notYet') return !todo.done;
    return true;
  });

  return (
    <div>
      <TodoForm onAdd={addTodo} />

      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => setFilter('all')}
          style={{ marginRight: '5px', fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          全て
        </button>
        <button
          onClick={() => setFilter('notYet')}
          style={{ marginRight: '5px', fontWeight: filter === 'notYet' ? 'bold' : 'normal' }}
        >
          未完了
        </button>
        <button
          onClick={() => setFilter('done')}
          style={{ fontWeight: filter === 'done' ? 'bold' : 'normal' }}
        >
          完了
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={(id, newText) => {
          const updated = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
          );
          addTodo("");
          deleteTodo("");
          setTodos(updated);
        }}
      />
    </div>
  );
}

export default TodoPage;