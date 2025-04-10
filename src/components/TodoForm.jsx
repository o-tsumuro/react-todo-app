import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="新しいTODOを追加"
      />
      <button className={styles.button} type="submit">追加</button>
    </form>
  );
}

export default TodoForm;