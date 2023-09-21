import React from "react";
import "./Projects.css";
import cc from "../../assets/img/cc.png";
const Projects = () => {
  return (
    <div className="projects section">
      <div className="maxWidth projectsAlign">
        <div className="titleSection">
          <h1>Projetos</h1>
        </div>
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
