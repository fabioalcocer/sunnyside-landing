import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-hamburger.svg";
import { useRef } from "react";

import "../styles/Hero.css";

function Hero() {
  const menu = useRef(null);

  const showMenu = () => {
    menu.current.classList.toggle("d-none");
  };

  const hideMenu = () => {
    menu.current.classList.toggle("d-none");
  };

  return (
    <main className="hero">
      <header className="hero__header">
        <img src={Logo} className="hero__logo" />
        <img src={Menu} className="hero__menu" onClick={showMenu} />
      </header>
      <div className="hero__nav d-none" ref={menu}>
        <ul>
          <li>
            <a href="#testimonials" onClick={hideMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={hideMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={hideMenu}>
              Projects
            </a>
          </li>
          <a href="#" className="nav__contact">
            Contact
          </a>
        </ul>
      </div>
      <h2 className="hero__title">We are creatives</h2>
    </main>
  );
}

export default Hero;
