import { Link } from "react-router-dom";
import PhotoSlot from "../components/PhotoSlot";
import { profile, skills, experience } from "../data";
import "./Home.css";

const READOUTS = [
  { value: "3+", label: "Years operating" },
  { value: skills.machine.length.toString().padStart(2, "0"), label: "Machine types" },
  { value: "0", label: "Major incidents" },
  { value: experience.length.toString().padStart(2, "0"), label: "Positions held" },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Welcome to my portfolio</p>
            <h1 className="hero__name">{profile.name}</h1>
            <h2 className="hero__title">{profile.title}</h2>
            <p className="hero__summary">{profile.summary}</p>

            <div className="hero__actions">
              <a className="btn btn-primary" href={profile.resumeFile} download>
                Download Resume
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero__photo-wrap">
            <PhotoSlot label="Photo of me" className="hero__photo" />
            <div className="hero__plate">
              <span className="hero__plate-row">{profile.location}</span>
              <span className="hero__plate-row hero__plate-row--dim">
                Operator ID · NW-01
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section readout">
        <div className="container readout__grid">
          {READOUTS.map((r) => (
            <div className="readout__item" key={r.label}>
              <span className="readout__value">{r.value}</span>
              <span className="readout__label">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container more-grid">
          <div>
            <p className="eyebrow">Where to next</p>
            <h2 className="section-title">Read the full record</h2>
          </div>
          <div className="more-links">
            <Link to="/about" className="more-link">
              <span className="more-link__title">About Me</span>
              <span className="more-link__desc">Summary, skills, experience and certification overview</span>
            </Link>
            <Link to="/experience" className="more-link">
              <span className="more-link__title">Experience</span>
              <span className="more-link__desc">Full role history with site photos</span>
            </Link>
            <Link to="/certification" className="more-link">
              <span className="more-link__title">Certification</span>
              <span className="more-link__desc">Issued credentials, browsable one at a time</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact__grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title">Contact Me</h2>
          </div>
          <div className="contact__details">
            <p className="contact__row">
              <span className="contact__label">Phone</span> {profile.phone}
            </p>
            <p className="contact__row">
              <span className="contact__label">Email</span> {profile.email}
            </p>
            <div className="contact__actions">
              <a className="btn btn-outline" href={profile.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="btn btn-outline" href={profile.line} target="_blank" rel="noreferrer">
                Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
