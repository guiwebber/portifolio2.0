import React from "react";
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
        <div className="titleSection">
          <h1>Habilidades</h1>
        </div>
      </div>
      <div className="skillsDiv">
        <div>
          <img src={hardskill} alt="" />
          <p>*Clique nas skills para ler mais sobre elas*</p>
        </div>
        <div className="imagensSkills">
          <button>
            <img src={html} alt="" />
          </button>
          <button>
            <img src={css} alt="" />
          </button>
          <button>
            <img src={js} alt="" />
          </button>
          <button>
            <img src={git} alt="" />
          </button>
          <button>
            <img src={github} alt="" />
          </button>
          <button>
            <img src={react} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
