import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Alacarte.css";

const Alacarte = ({ value }) => {
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
            <h2> Nigiri Sushi - Sashimi </h2>
            <h5 className="underline-category">{t("catdesc1")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Maguro * <span> 6.50 </span>
                </p>
                <p className="food-description">{t("maguro")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Albacore * <span> 6.00 </span>
                </p>
                <p className="food-description">{t("albacore")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hamachi * <span> 6.75 </span>
                </p>
                <p className="food-description">{t("hamachi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake * <span> 6.00 </span>
                </p>
                <p className="food-description">{t("sake")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Shiromi * <span> 5.00 </span>
                </p>
                <p className="food-description">{t("shiromi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Shime-Saba * <span> 5.00 </span>
                </p>
                <p className="food-description">{t("shimesaba")}</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Karame Hotategai {t("nigirionly")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("karamehotategai")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hotategai {t("nigirionly")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("hotategai")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ikura {t("nigirionly")} <span> 6.25 </span>
                </p>
                <p className="food-description">{t("ikura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sunrise {t("nigirionly")} <span> 6.25 </span>
                </p>
                <p className="food-description">{t("sunrise")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tobiko {t("nigirionly")} <span> 5.50 </span>
                </p>
                <p className="food-description">{t("tobiko")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Massago {t("nigirionly")} <span> 5.00 </span>
                </p>
                <p className="food-description">{t("massago")}</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Sushi Tempura <span> 5.00 </span>
                </p>
                <p className="food-description">{t("sushitempura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake Kunsei <span> 6.25 </span>
                </p>
                <p className="food-description">{t("sakekunsei")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ebi <span> 4.75 </span>
                </p>
                <p className="food-description">{t("ebi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Unagi <span> 6.50 </span>
                </p>
                <p className="food-description">{t("unagi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Kani-Kama <span> 4.75 </span>
                </p>
                <p className="food-description">{t("kanikama")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tako <span> 6.00 </span>
                </p>
                <p className="food-description">{t("tako")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category"> Maki - Temaki </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("grilledsalmonskintitle")} <span> 5.00 </span>
                </p>
                <p className="food-description">{t("grilledsalmonskin")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("sakemakititle")} <span> 6.00 </span>
                </p>
                <p className="food-description">{t("sakemaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("tekkamakititle")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("tekkamaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("unakyutitle")} <span> 7.75 </span>
                </p>
                <p className="food-description">{t("unakyu")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamesabatitle")} <span> 6.00 </span>
                </p>
                <p className="food-description">{t("karamesaba")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamesaketitle")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("karamesake")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamemagurotitle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("karamemaguro")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamenerihamachititle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("karamenerihamachi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("bostontitle")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("boston")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("newyorktitle")} <span> 6.50 </span>
                </p>
                <p className="food-description">{t("newyork")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("californiatitle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("california")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">{t("kamikazetitle")}</p>
                <p className="food-description">{t("kamikaze")}</p>
                <ul>
                  <li>
                    {t("sake")} <span> 7.50 </span>
                  </li>
                  <li>
                    {t("maguro")} <span> 8.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("tempurarolltitle")} <span> 6.00 </span>
                </p>
                <p className="food-description">{t("tempuraroll")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("phillytitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("philly")}</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  {t("toritorititle")} <span> 7.50 </span>
                </p>
                <p className="food-description">{t("toritori")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("threeamigostitle")} <span> 7.00 </span>
                </p>
                <p className="food-description">{t("threeamigos")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("quebectitle")} <span> 7.00 </span>
                </p>
                <p className="food-description">{t("quebec")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("montrealtitle")} <span> 7.50 </span>
                </p>
                <p className="food-description">{t("montreal")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("twistertitle")} <span> 7.50 </span>
                </p>
                <p className="food-description">{t("twister")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("sasaducheftitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("sasaduchef")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("nijimakititle")} <span> 7.75 </span>
                </p>
                <p className="food-description">{t("nijimaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("elninotitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("elnino")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("alohatitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("aloha")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("volcanotitle")} <span> 7.75 </span>
                </p>
                <p className="food-description">{t("volcano")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("eyeofthetigertitle")} <span> 7.75 </span>
                </p>
                <p className="food-description">{t("eyeofthetiger")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("dragoneyetitle")} <span> 10.00 </span>
                </p>
                <p className="food-description">{t("dragoneye")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("zentitle")} <span> 10.00 </span>
                </p>
                <p className="food-description">{t("zen")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamelobstertitle")} <span> 12.00 </span>
                </p>
                <p className="food-description">{t("karamelobster")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category">{t("cattitle3")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("kappamakititle")} <span> 4.25 </span>
                </p>
                <p className="food-description">{t("kappamaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("avocadomakititle")} <span> 4.50 </span>
                </p>
                <p className="food-description">{t("avocadomaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("oshinkotitle")} <span> 4.50 </span>
                </p>
                <p className="food-description">{t("oshinko")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("yasaimakititle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("mushiyasai")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("shoujinagetitle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("shoujinage")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("sicilititle")} <span> 6.75 </span>
                </p>
                <p className="food-description">{t("sicili")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category">{t("cattitle4")}</h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  La Nina <span> 17.00 </span>
                </p>
                <p className="food-description">{t("lanina")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Avalanche <span> 17.00 </span>
                </p>
                <p className="food-description">{t("avalanche")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("francemakititle")} <span> 18.00 </span>
                </p>
                <p className="food-description">{t("francemaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("pizzatitle")} <span> 10.75 </span>
                </p>
                <p className="food-description">{t("pizza")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("caterpillartitle")} <span> 14.00 </span>
                </p>
                <p className="food-description">{t("caterpillar")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("labetetitle")} <span> 14.00 </span>
                </p>
                <p className="food-description">{t("labete")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("labelletitle")} <span> 15.50 </span>
                </p>
                <p className="food-description">{t("labelle")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Soleil Candiac <span> 15.00 </span>
                </p>
                <p className="food-description">{t("soleilcandiac")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("tunaspecialtitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("tunaspecial")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("reddragontitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("reddragon")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("dragontitle")} <span> 17.00 </span>
                </p>
                <p className="food-description">{t("dragon")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("trustmetitle")} <span> 14.00 </span>
                </p>
                <p className="food-description">{t("trustme")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("yinyangtitle")} <span> 14.00 </span>
                </p>
                <p className="food-description">{t("yinyang")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2>{t("cattitle5")}</h2>
            <h5 className="underline-category">{t("catdesc5")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("indochinetitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("indochine")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("illusiontitle")} <span> 8.00 </span>
                </p>
                <p className="food-description">{t("illusion")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("fantasiatitle")} <span> 8.50 </span>
                </p>
                <p className="food-description">{t("fantasia")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("exoticatitle")} <span> 8.50 </span>
                </p>
                <p className="food-description">{t("exotica")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("voiliertitle")} <span> 11.50 </span>
                </p>
                <p className="food-description">{t("voilier")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("passiontitle")} <span> 11.50 </span>
                </p>
                <p className="food-description">{t("passion")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("amoureuxtitle")} <span> 11.50 </span>
                </p>
                <p className="food-description">{t("amoureux")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("nuetitle")} <span> 12.75 </span>
                </p>
                <p className="food-description">{t("nue")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alacarte;
