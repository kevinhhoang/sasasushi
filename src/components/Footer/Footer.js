import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="container1">
        <h3 className="footer-title">{t("addresstitle")}</h3>
        <p className="footer-text">
          {t("address1")}
          <br />
          {t("address2")}
        </p>
      </div>
      <div className="container1">
        <h3 className="footer-title">{t("hourstitle")}</h3>
        <p className="footer-text">
          {t("hours1")} <br />
          {t("hours2")} <br />
          {t("hours3")}
        </p>
      </div>
      <div className="container1">
        <h3 className="footer-title">{t("contacttitle")}</h3>
        <p className="footer-text">
          <a href="tel:+14506320559">{t("contact1")}</a> <br />
          {t("contact2")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
