import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Supper.css";

const Supper = ({ value }) => {
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
                  Yakitori <span> 7.50 </span>
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
              <li className="food-item">
                <p className="food-title">
                  Pizza <span> 10.75 </span>
                </p>
                <p className="food-description">{t("dinnerpizza")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  La Nina <span> 14.00 </span>
                </p>
                <p className="food-description">{t("dinnerlanina")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Avalanche <span> 14.00 </span>
                </p>
                <p className="food-description">{t("dinneravalanche")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("tunasteaktitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("tunasteak")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("dinnertunaspecialtitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("dinnertunaspecial")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category">{t("soup")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Miso Shiru <span> 3.25 </span>
                </p>
                <p className="food-description">{t("misoshiru")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("seafoodmisotitle")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("seafoodmiso")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sumashi <span> 6.50 </span>
                </p>
                <p className="food-description">{t("sumashi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">Udon</p>
                <p className="food-description">{t("udon")}</p>
                <ul>
                  <li>
                    {t("vegetarian")} <span> 5.00 </span>
                  </li>
                  <li>
                    {t("chicken")} <span> 6.00 </span>
                  </li>
                  <li>
                    {t("shrimptempura")} <span> 6.00 </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category">{t("salad")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("mixedsaladtitle")} <span> 6.00 </span>
                </p>
                <p className="food-description">{t("mixedsalad")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ohitashi <span> 6.00 </span>
                </p>
                <p className="food-description">{t("ohitashi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("seafoodsaladtitle")} <span> 12.00 </span>
                </p>
                <p className="food-description">{t("seafoodsalad")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2>{t("hotmeals")}</h2>
            <h5 className="underline-category">{t("dinnerhotmealdesc")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("chickenkatsutitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("chickenkatsu")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">Teriyaki</p>
                <p className="food-description">{t("teriyaki")}</p>
                <ul>
                  <li>
                    {t("vegetarian")} <span> 16.00 </span>
                  </li>
                  <li>
                    {t("chicken")} <span> 17.00 </span>
                  </li>
                  <li>
                    {t("salmon")} <span> 20.00 </span>
                  </li>
                  <li>
                    {t("steak")} <span> 23.00 </span>
                  </li>
                  <li>
                    {t("seafood")} <span> 25.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">Tempura</p>
                <p className="food-description">{t("tempura")}</p>
                <ul>
                  <li>
                    {t("vegetarian")} <span> 18.00 </span>
                  </li>
                  <li>
                    {t("shrimp")} <span> 22.00 </span>
                  </li>
                  <li>
                    {t("seafood")} <span> 25.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("seafoodyakiudontitle")} <span> 28.00 </span>
                </p>
                <p className="food-description">{t("seafoodyakiudon")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Sushi - Sashimi </h2>
            <h5 className="underline-category">{t("sushisashimidesc")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("assortedsushititle")} <span> 28.00 </span>
                </p>
                <p className="food-description">{t("assortedsushi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("sushisashimititle")} <span> 29.00 </span>
                </p>
                <p className="food-description">{t("sushisashimi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("sashimititle")}
                  <span> 29.00 </span>
                </p>
                <p className="food-description">{t("sashimi")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supper;
