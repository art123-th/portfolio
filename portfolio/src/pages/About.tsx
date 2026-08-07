import { Link } from "react-router-dom";
import PhotoSlot from "../components/PhotoSlot";
import { profile, skills, experience, certifications } from "../data";
import "./About.css";

function About() {
  return (
    <section className="section about">
      <div className="container">
        <p className="eyebrow">About Me</p>
        <h1 className="section-title about__title">{profile.name}</h1>

        <div className="about__top">
          <PhotoSlot label="Photos of me" className="about__photo" />

          <div className="about__summary-panel">
            <span className="about__summary-label">Summary</span>
            <p className="about__summary-text">{profile.summary}</p>
          </div>
        </div>

        <div className="about__cards">
          <div className="about-card">
            <span className="about-card__label">Skill</span>
            <ul className="about-card__list">
              {[...skills.machine, ...skills.technical].slice(0, 5).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link to="/skills" className="btn btn-outline about-card__btn">
              Full Skill
            </Link>
          </div>

          <div className="about-card">
            <span className="about-card__label">Experience</span>
            <ul className="about-card__list">
              {experience.map((e) => (
                <li key={e.role}>
                  {e.role} <span className="about-card__muted">— {e.period}</span>
                </li>
              ))}
            </ul>
            <Link to="/experience" className="btn btn-outline about-card__btn">
              Full Detail
            </Link>
          </div>

          <div className="about-card">
            <span className="about-card__label">Certification</span>
            <ul className="about-card__list">
              {certifications.slice(0, 3).map((c) => (
                <li key={c.title}>{c.title}</li>
              ))}
            </ul>
            <Link to="/certification" className="btn btn-outline about-card__btn">
              View
            </Link>
          </div>
        </div>

        <div className="about__footer">
          <a className="btn btn-primary" href={profile.resumeFile} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
