function Experience() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Work Experience</h2>

      <div style={styles.card}>
        <h3>Excavator Operator</h3>
        <p>Construction Contractor Company, Thailand</p>
        <p>Oct 2023 - Present</p>
        <p>
          Operated excavators for demolition of residential and commercial buildings</p>
        <p>
            Used attachments such as hydraulic breakers and grapples for structural dismantling</p>
        <p> 
            Performed land clearing, digging, and site preparation for construction projects</p>
        <p>
            Followed safety regulations and ensured zero major accidents on-site</p>
        <p>
            Conducted daily inspection and basic maintenance of heavy equipment</p>
        <p>
            Worked in tight urban environments requiring precision and control</p>

      </div>

      <div style={styles.card} data-aos="fade-up">
        <h3>Internship, Salford & Co Corporation</h3>
        <p>XYZ Engineering</p>
        <p>Apr 2021 - Dec 2021</p>
        <p>
          Supported senior executives with administrative tasks, including scheduling meetings, managing correspondence, and preparing reports.</p>
        <p>
            Assisted in the planning and execution of corporate events and client meetings, ensuring a high level of professionalism and attention to detail.</p>
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
  },
}

export default Experience