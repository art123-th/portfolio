function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>ART</h2>
    </div>
  )
}

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    width: "100%",
    padding: "15px",
    backgroundColor: "#020617",
    color: "white",
    textAlign: "center" as const,
  },
}

export default Navbar