import { useState } from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from './TodoPage.module.css';

function TodoPage({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'notYet') return !todo.done;
    return true;
  });

  return (
    <div>
      <TodoForm onAdd={addTodo} />

        <div className={styles.filterButtons}>
          {['all', 'notYet', 'done'].map((f) => {
            return (
              <button
                key={f}
                className={`${styles.filterButton} ${filter === f ? styles.active : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'すべて' : f === 'notYet' ? '未完了' : '完了'}
              </button>
            );
          })}
        </div>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default TodoPage;