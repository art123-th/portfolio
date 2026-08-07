import { useState } from "react";
import PhotoSlot from "../components/PhotoSlot";
import { experience, jobPhotos } from "../data";
import "./Experience.css";

const INITIAL_PHOTO_COUNT = 8;

function Experience() {
  const [activeRole, setActiveRole] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const current = experience[activeRole];
  const photos = showAllPhotos ? jobPhotos : jobPhotos.slice(0, INITIAL_PHOTO_COUNT);

  return (
    <section className="section experience">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h1 className="section-title">Work History</h1>

        <div className="experience__layout">
          <aside className="experience__detail">
            <span className="experience__detail-label">Detail</span>

            <div className="experience__role-tabs">
              {experience.map((e, i) => (
                <button
                  key={e.role}
                  className={`experience__role-tab ${i === activeRole ? "experience__role-tab--active" : ""}`}
                  onClick={() => setActiveRole(i)}
                >
                  {e.role}
                </button>
              ))}
            </div>

            <div className="experience__detail-body">
              <h3 className="experience__detail-role">{current.role}</h3>
              <p className="experience__detail-company">{current.company}</p>
              <span className="experience__detail-period">{current.period}</span>

              <ul className="experience__detail-list">
                {current.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="experience__photos">
            <div className="experience__photo-grid">
              {photos.map((p) => (
                <PhotoSlot key={p.id} label={p.label} className="experience__photo" />
              ))}
            </div>

            {jobPhotos.length > INITIAL_PHOTO_COUNT && (
              <button
                className="btn btn-outline experience__see-more"
                onClick={() => setShowAllPhotos((v) => !v)}
              >
                {showAllPhotos ? "Show Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
