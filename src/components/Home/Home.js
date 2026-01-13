import React from "react";
import { useTranslation } from "react-i18next";

import "./Home.css";
import Grid from "./grid.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="main-body">
        <img src={Grid} alt="" />
        <p>
          {t("introtext1")}
          <br />
          {t("introtext2")}
          <br />
          <br />
          {t("introtext3")}
          <br />
          <br />
          {t("introtext4")}
          <br />
        </p>
      </div>
    </section>
  );
};

export default Home;
