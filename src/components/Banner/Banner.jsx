import React from "react";
import "./Banner.css";
import logoReact from "../../assets/img/react.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="boxBanner maxWidth">
        <div>
        <h1 className="textosBanner">Seja bem-vindo!</h1>
        <h2 className="textosBanner">Meu nome é Guilherme Webber e este é meu portifólio!</h2>
        </div>
        <img className="logoReact" src={logoReact} alt="" />
      </div>
    </div>
  );
};

export default Banner;
