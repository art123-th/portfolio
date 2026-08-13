import PhotoSlot from "../components/PhotoSlot";
import { profile, skills, experience, certifications } from "../data";
import "./About.css";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function About() {
  return (
    <section id="about" className="section about">
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
          <div className="about-card about-card--wide">
            <span className="about-card__label">Skill</span>

            <div className="about-card__skill-groups">
              <div>
                <span className="about-card__skill-group-title">Machine</span>
                <div className="about-card__tags">
                  {skills.machine.map((s) => (
                    <span className="about-card__tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="about-card__skill-group-title">Technical</span>
                <div className="about-card__tags">
                  {skills.technical.map((s) => (
                    <span className="about-card__tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
            <button className="btn btn-outline about-card__btn" onClick={() => scrollTo("experience")}>
              Full Detail
            </button>
          </div>

          <div className="about-card">
            <span className="about-card__label">Certification</span>
            <ul className="about-card__list">
              {certifications.map((c) => (
                <li key={c.title}>{c.title}</li>
              ))}
            </ul>
            <button className="btn btn-outline about-card__btn" onClick={() => scrollTo("certification")}>
              View
            </button>
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
