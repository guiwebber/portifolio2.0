import React from "react";
import svggg from "../../assets/img/svggg.svg";
import hardskill from "../../assets/img/shine.svg";
import html from "../../assets/img/skills/html.svg";
import css from "../../assets/img/skills/css.svg";
import github from "../../assets/img/skills/github.svg";
import git from "../../assets/img/skills/git.svg";
import js from "../../assets/img/skills/js.svg";
import react from "../../assets/img/skills/react.svg";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills section">
      <div className=" maxWidth">
        <h1 className="titleSection">
          <img className="svgL" src={svggg} alt="" />
          Habilidades
          <img className="svgR" src={svggg} alt="" />
        </h1>
      </div>
      <div className="skillsDiv">
        <div>
          <img src={hardskill} alt="" />
          <p>*Passe o mouse por cima das skills para ver algo*</p>
        </div>
        <div className="imagensSkills">
          <div>
            <img src={html} alt="" />
          </div>
          <div>
            <img src={css} alt="" />
          </div>
          <div>
            <img src={js} alt="" />
          </div>
          <div>
            <img src={git} alt="" />
          </div>
          <div>
            <img src={github} alt="" />
          </div>
          <div>
            <img src={react} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
