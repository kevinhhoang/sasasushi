import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Lunch.css";

const Lunch = ({ value }) => {
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
            <h2 className="underline-category">{t("appetizer")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Agedashi Tofu <span> 5.00 </span>
                </p>
                <p className="food-description">{t("agedashitofu")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Gyoza <span> 6.00 </span>
                </p>
                <p className="food-description">{t("gyoza")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Yakitori <span> 7.00 </span>
                </p>
                <p className="food-description">{t("yakitori")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Haru Maki <span> 7.50 </span>
                </p>
                <p className="food-description">{t("harumaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("vegetabletempuratitle")} <span> 7.50 </span>
                </p>
                <p className="food-description">{t("vegetabletempura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 9.00 </span>
                </p>
                <p className="food-description">{t("tempura")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2>{t("hotmeals")}</h2>
            <h5 className="underline-category">{t("hotmealsdesc")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("chickenkatsutitle")}
                  <span> 15.00 </span>
                </p>
                <p className="food-description">{t("chickenkatsu")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">Teriyaki</p>
                <p className="food-description">{t("teriyaki")}</p>
                <ul>
                  <li>
                    {t("chicken")} <span> 15.00 </span>
                  </li>
                  <li>
                    {t("salmon")} <span> 16.00 </span>
                  </li>
                  <li>
                    {t("steak")} <span> 19.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 17.00 </span>
                </p>
                <p className="food-description">{t("tempura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sasa Special <span> 17.00 </span>
                </p>
                <p className="food-description">{t("sasaspecial")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Sushi Combo </h2>
            <h5 className="underline-category">{t("sushicombodesc")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Sushi Moriowase <span> 17.00 </span>
                </p>
                <p className="food-description">{t("sushimoriowase")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">Sashimi & Maki</p>
                <p className="food-description">{t("sashimiandmaki")}</p>
                <ul>
                  <li>
                    {t("withoutrice")} <span> 17.00 </span>
                  </li>
                  <li>
                    {t("withrice")} <span> 18.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Maki Combo <span> 13.00 </span>
                </p>
                <p className="food-description">{t("makicombo")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <div className="underline-category" />
            <p className="centertext">{t("notincluded")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
