import React from "react";
import "./Projects.css";
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
          beatae velit praesentium est illo consectetur ratione rerum minus, a
          quam exercitationem eaque placeat optio minima adipisci quibusdam
          veritatis ducimus temporibus?
        </p>
      </div>
    </div>
  );
};

export default Projects;
