import React from "react";
import "./Projects.css";
import cc from "../../assets/img/cc.png";
import svggg from "../../assets/img/svggg.svg";
const Projects = () => {
  return (
    <div className="projects section">
      <div className="maxWidth projectsAlign">
        <h1 className="titleSection">
          <img className="svgL" src={svggg} alt="" />
          Meus projetos
          <img className="svgR" src={svggg} alt="" />
        </h1>
      </div>
      <div className="containerProjects">
        <button>ᐊ</button>
        <div className="projeto">
          <h1>Cartão de crédito interativo</h1>
          <img src={cc} alt="" />
          <p className="linguagens">
            <span className="empashis">Linguagens utilizadas:</span> HTML, CSS,
            JavaScript
          </p>
          <p>
            Alguma descrição do projeto aqui sobre o projeto e lorem ipsum ablor
            lo da lorem varut
          </p>
        </div>
        <button>ᐅ</button>
      </div>
    </div>
  );
};

export default Projects;
