import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 180, textAlign: "center", border: "none" }}>
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: "center" }}>Error 404</p>
        <h1 className="section-title" style={{ marginTop: 12 }}>Page Not Found</h1>
        <p style={{ marginTop: 16 }}>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
