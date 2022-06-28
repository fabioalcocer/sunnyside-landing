import "../styles/Footer.css";
import LogoFooter from "../assets/logo-footer.svg";
import LogoFb from "../assets/icon-facebook.svg";
import LogoIg from "../assets/icon-instagram.svg";
import LogoTw from "../assets/icon-twitter.svg";
import LogoPinterest from "../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={LogoFooter} className="footer__logo" />
      <nav className="footer__nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="footer__social">
        <a href="#" className="social-icon">
          <img src={LogoFb} alt="" />
        </a>
        <a href="#" className="social-icon">
          <img src={LogoIg} alt="" />
        </a>
        <a href="#" className="social-icon">
          <img src={LogoTw} alt="" />
        </a>
        <a href="#" className="social-icon">
          <img src={LogoPinterest} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
