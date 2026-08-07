function Projects() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.card}>
        <h3>Land Excavation Project</h3>
        <p>Location: Chonburi</p>
        <p>Year: 2023</p>
        <p>
          Responsible for operating an excavator to dig and level land for
          construction. Ensured safety and accuracy in all operations.
        </p>
      </div>

      <div style={styles.card}>
        <h3>Pipeline Trenching</h3>
        <p>Location: Rayong</p>
        <p>Year: 2022</p>
        <p>
          Dug trenches for pipeline installation with precision and followed
          site safety standards.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "100px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  card: {
  backgroundColor: "#1e293b",
  padding: "20px",
  margin: "10px auto",
  borderRadius: "10px",
  maxWidth: "500px",
  transition: "0.3s",
},
}

export default Projects