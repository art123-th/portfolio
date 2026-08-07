function Skills() {
  const machineSkills = ["Excavator", "Loader", "Crane", "Welding"]
  const techSkills = ["Demolition", "Earthwork", "Equipment attachments"]

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Skills</h2>

      <h3 style={styles.subtitle}>Machine Skills</h3>
      <div style={styles.skillContainer}>
        {machineSkills.map((skill, index) => (
          <span key={index} style={styles.tag}>
            {skill}
          </span>
        ))}
      </div>

      <h3 style={styles.subtitle}>Tech Skills</h3>
      <div style={styles.skillContainer}>
        {techSkills.map((skill, index) => (
          <span key={index} style={styles.tag}>
            {skill}
          </span>
        ))}
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
    marginBottom: "30px",
  },
  subtitle: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  skillContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    gap: "10px",
  },
  tag: {
    backgroundColor: "#1e293b",
    padding: "10px 15px",
    borderRadius: "20px",
    fontSize: "14px",
  },
}

export default Skills