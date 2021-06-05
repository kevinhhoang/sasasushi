import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Combo.css";

const Combo = ({ value }) => {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="menu-content">
        <div className="menu-sidebar">
          <ul>
            <li>
              <NavLink
                className="sidebar-menu_link"
                to={`/${value}/menus/${t("urlalacarte")}`}
              >
                {t("sbalacarte")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-menu_link"
                to={`/${value}/menus/${t("urlcombo")}`}
              >
                {t("sbcombo")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-menu_link"
                to={`/${value}/menus/${t("urllunch")}`}
              >
                {t("sblunch")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-menu_link"
                to={`/${value}/menus/${t("urlsupper")}`}
              >
                {t("sbsupper")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="list-container">
          <div className="food-category">
            <h2 className="underline-category">{t("comboroll")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("comboonetitle")} <span> 36.00 </span>
                </p>
                <p className="food-description">{t("comboonelist")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("combotwotitle")} <span> 36.00 </span>
                </p>
                <p className="food-description">{t("combotwolist")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("combothreetitle")} <span> 72.00 </span>
                </p>
                <p className="food-description">{t("combothreelist")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("combofourtitle")} <span> 130.00 </span>
                </p>
                <p className="food-description">{t("combofourlist")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combo;
