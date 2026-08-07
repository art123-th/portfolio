import { profile } from "../data";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__mark">NW-01</span>
        <span className="footer__text">
          {profile.name} · {profile.title} · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
