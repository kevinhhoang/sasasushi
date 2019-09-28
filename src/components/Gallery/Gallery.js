import React from "react";
import sushi1 from "./pictures/sushi1.jpg";
import sushi2 from "./pictures/sushi2.jpg";
import sushi3 from "./pictures/sushi3.jpg";
import sushi4 from "./pictures/sushi4.jpg";
import sushi5 from "./pictures/sushi5.jpg";
import sushi6 from "./pictures/sushi6.jpg";
import sushi7 from "./pictures/sushi7.jpg";
import sushi8 from "./pictures/sushi8.jpg";
import sushi9 from "./pictures/sushi9.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container-flex">
      <ul className="img-list-flex">
        <li>
          <img src={sushi1} alt="img" />
        </li>
        <li>
          <img src={sushi2} alt="img" />
        </li>
        <li>
          <img src={sushi3} alt="img" />
        </li>
        <li>
          <img src={sushi4} alt="img" />
        </li>
        <li>
          <img src={sushi5} alt="img" />
        </li>
        <li>
          <img src={sushi6} alt="img" />
        </li>
        <li>
          <img src={sushi7} alt="img" />
        </li>
        <li>
          <img src={sushi8} alt="img" />
        </li>
        <li>
          <img src={sushi9} alt="img" />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
