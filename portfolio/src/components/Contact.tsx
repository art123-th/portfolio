function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Me</h2>

      <p style={styles.text}>Phone: 080-000-0000</p>
      <p style={styles.text}>Email: your@email.com</p>

      <div style={styles.buttonContainer}>
        <a href="https://facebook.com" target="_blank" style={styles.button}>
          Facebook
        </a>

        <a href="https://line.me" target="_blank" style={styles.button}>
          Line
        </a>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "100px 20px",
    backgroundColor: "#020617",
    color: "white",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  text: {
    margin: "10px 0",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#38bdf8",
    color: "black",
    borderRadius: "5px",
    textDecoration: "none",
  },
}

export default Contact