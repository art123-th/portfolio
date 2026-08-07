function Hero() {
  return (
    <div style={styles.container}>
      <h1 style={styles.name}>Mr.Narongsak Wongwent</h1>
      <h2 style={styles.role}>Excavator Operator</h2>
      <p style={styles.desc}>
        Experienced in heavy machinery operation and construction work
      </p>

      <button style={styles.button}>Download Resume</button>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center" as const,
  },
  name: {
    fontSize: "48px",
    marginBottom: "10px",
    color: "#fdfeff",
  },
  role: {
    fontSize: "24px",
    color: "#38bdf8",
  },
  desc: {
    marginTop: "10px",
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
}

export default Hero