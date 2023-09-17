import React from "react";

const EachProject = ({project}) => {
  return <div className="boxProject">
    <h1>{project.nome}</h1>
    <img src={project.imagem} alt="" />
    <p>{project.descricao}</p>
    <p>{project.linguagens}</p>
  </div>;
};

export default EachProject;
