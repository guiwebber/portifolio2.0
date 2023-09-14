import React from "react";
import "./Menu.css";
import gwLogo from "../../assets/img/gw.png";
const Menu = () => {
  return (
    <nav className="menuTop">
      <div className="logoDesk">
        <img src={gwLogo} alt="" />
      </div>
      <div className="maxWidth flexTop">
        <div className="divLinks">
          <a className="links line" href="">Projetos</a>
          <a className="links line" href="">Sobre mim</a>
          <a className="links line" href="">Contatos</a>
          <a className="links line" href="">Habilidades</a>
          <a className="links line" href="">Certificações</a>
        </div>
      </div>
      <div className="menuMob">
      <div className="logoMob">
        <img src={gwLogo} alt="" />
      </div>
        <input className="checkBoxInput" type="checkbox" />
        <span></span>
        <div className="menuMobile">
          <a className="links line" href="">Projetos</a>
          <a className="links line" href="">Sobre mim</a>
          <a className="links line" href="">Contatos</a>
          <a className="links line" href="">Habilidades</a>
          <a className="links line" href="">Certificações</a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
