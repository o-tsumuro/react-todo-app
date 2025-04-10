function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My TODO App</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#eee',
    color: '#333',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  }
};

export default Footer;