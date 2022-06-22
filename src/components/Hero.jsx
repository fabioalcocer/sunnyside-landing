import logo from "../assets/logo.svg";
import menu from "../assets/icon-hamburger.svg";
import "../styles/Hero.css";

function Hero() {
  return (
    <main className="hero">
      <header className="hero__header">
        <img src={logo} className="hero__logo" />
        <img src={menu} className="hero__menu" />
      </header>
      <h2 className="hero__title">We are creatives</h2>
    </main>
  );
}

export default Hero;
