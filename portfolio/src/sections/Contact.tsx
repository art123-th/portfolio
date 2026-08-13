import { profile } from "../data";
import "./Contact.css";

function Contact() {
  return (
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
  );
}

export default Contact;
