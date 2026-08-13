import PhotoSlot from "../components/PhotoSlot";
import { profile, skills, experience } from "../data";
import "./Hero.css";

const READOUTS = [
  { value: "3+", label: "Years operating" },
  { value: skills.machine.length.toString().padStart(2, "0"), label: "Machine types" },
  { value: "0", label: "Major incidents" },
  { value: experience.length.toString().padStart(2, "0"), label: "Positions held" },
];

function Hero() {
  return (
    <section id="home" className="hero">
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
            <a
              className="btn btn-outline"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
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

      <div className="container readout__grid">
        {READOUTS.map((r) => (
          <div className="readout__item" key={r.label}>
            <span className="readout__value">{r.value}</span>
            <span className="readout__label">{r.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
