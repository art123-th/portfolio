import { useState } from "react";
import PhotoSlot from "../components/PhotoSlot";
import { certifications } from "../data";
import "./Certification.css";

function Certification() {
  const [index, setIndex] = useState(0);
  const count = certifications.length;

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count);
  };

  const visible = [-1, 0, 1].map((offset) => ({
    offset,
    item: certifications[(index + offset + count) % count],
  }));

  return (
    <section id="certification" className="section certification">
      <div className="container">
        <p className="eyebrow">Certification</p>
        <h1 className="section-title">Issued Credentials</h1>

        <div className="cert-carousel">
          <button
            className="cert-arrow cert-arrow--left"
            onClick={() => go(-1)}
            aria-label="Previous certificate"
          >
            &#8592;
          </button>

          <div className="cert-track">
            {visible.map(({ offset, item }) => (
              <div
                key={`${item.title}-${offset}`}
                className={`cert-card ${offset === 0 ? "cert-card--active" : "cert-card--side"}`}
                onClick={() => offset !== 0 && go(offset as -1 | 1)}
              >
                <PhotoSlot label="Certificate photo" className="cert-card__photo" />
                <div className="cert-card__body">
                  <h3 className="cert-card__title">{item.title}</h3>
                  <p className="cert-card__issuer">{item.issuer}</p>
                  <span className="cert-card__year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="cert-arrow cert-arrow--right"
            onClick={() => go(1)}
            aria-label="Next certificate"
          >
            &#8594;
          </button>
        </div>

        <div className="cert-dots">
          {certifications.map((c, i) => (
            <button
              key={c.title}
              className={`cert-dot ${i === index ? "cert-dot--active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show certificate ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
