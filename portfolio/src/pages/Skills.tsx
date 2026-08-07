import { skills } from "../data";
import "./Skills.css";

function Skills() {
  return (
    <section className="section skills">
      <div className="container">
        <p className="eyebrow">Full Skill</p>
        <h1 className="section-title">Skills &amp; Equipment</h1>

        <div className="skills__groups">
          <div className="skills__group">
            <h3 className="skills__group-title">Machine Skills</h3>
            <div className="skills__tags">
              {skills.machine.map((s) => (
                <span className="skills__tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__group">
            <h3 className="skills__group-title">Technical Skills</h3>
            <div className="skills__tags">
              {skills.technical.map((s) => (
                <span className="skills__tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
