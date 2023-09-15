import React from "react";
import "./Contacts.css";
import svggg from "../../assets/img/svggg.svg";
const Contacts = () => {
  return (
    <div className="contacts section">
      <div className=" maxWidth">
        <h1 className="titleSection">
          <img className="svgL" src={svggg} alt="" />
          Contatos
          <img className="svgR" src={svggg} alt="" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          soluta molestias ab voluptatem nulla quaerat eligendi dicta et ad
          commodi, minus nemo atque hic rerum ut id temporibus, itaque illum?
        </p>
      </div>
    </div>
  );
};

export default Contacts;
