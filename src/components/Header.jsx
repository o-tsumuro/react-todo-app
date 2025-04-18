import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>TODOアプリ</h1>
      <nav>
        <Link to="/" className={styles.link}>Home</Link>
        {' | '}
        <Link to="/about" className={styles.link}>About</Link>
      </nav>
    </header>
  );
}

export default Header;