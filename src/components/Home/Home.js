import React from "react";
import "./Home.css";
import Grid from "./Grid.png";

const Home = () => {
  return (
    <section className="container">
      <div className="main-body">
        <img src={Grid} alt="" />
        <p>
          At Sasa Sushi, we are always looking for something new and better.
          <br />
          According to the inspiration of the moment and fresh ingredients found
          at the market, our chef creates new dishes or can develop tasting
          menus.
        </p>
      </div>
    </section>
  );
};

export default Home;
