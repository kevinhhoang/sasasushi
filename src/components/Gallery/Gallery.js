import React from "react";
import grid from "./pic2.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container-flex">
      <ul className="img-list-flex">
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
        <li>
          <img src={grid} alt="img" />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
