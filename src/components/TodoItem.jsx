import { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />

      {isEditing ? (
        <div className={styles.editing}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={styles.editInput}
          />
          <button onClick={handleSave} className={styles.saveButton}>保存</button>
          <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>キャンセル</button>
        </div>
      ) : (
        <div className={styles.todoText}>
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none', flex: 1 }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>編集</button>
          <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>削除</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;