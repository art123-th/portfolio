function About() {
  return (
    <div style={styles.container}>
      <h2>About Me</h2>
      <p>
        I am an experienced excavator operator with strong skills in construction
        and heavy machinery. I have worked on various projects and can handle
        different types of equipment safely and efficiently.
      </p>
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
}

export default About