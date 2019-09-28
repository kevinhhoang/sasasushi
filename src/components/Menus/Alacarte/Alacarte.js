import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Alacarte.css";

const Alacarte = () => {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="menu-content">
        <div className="menu-sidebar">
          <ul>
            <li>
              <NavLink className="sidebar-menu_link" to="/menus/alacarte">
                A LA CARTE
              </NavLink>
            </li>
            <li>
              <NavLink className="sidebar-menu_link" to="/menus/lunch">
                LUNCH
              </NavLink>
            </li>
            <li>
              <NavLink className="sidebar-menu_link" to="/menus/supper">
                SUPPER
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
                  Maguro * <span> 6.00 </span>
                </p>
                <p className="food-description">{t("maguro")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Albacore * <span> 5.50 </span>
                </p>
                <p className="food-description">{t("albacore")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hamachi * <span> 6.50 </span>
                </p>
                <p className="food-description">{t("hamachi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake * <span> 5.50 </span>
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
                  Karame Hotategai (Nigiri only) <span> 6.00 </span>
                </p>
                <p className="food-description">{t("karamehotategai")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hotategai (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">{t("hotategai")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ikura (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">{t("ikura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sunrise (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">{t("sunrise")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tobiko (Nigiri only) <span> 5.50 </span>
                </p>
                <p className="food-description">{t("tobiko")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Massago (Nigiri only) <span> 5.00 </span>
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
                  Sake Kunsei <span> 5.50 </span>
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
                  Unagi <span> 6.00 </span>
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
                  Tako <span> 5.75 </span>
                </p>
                <p className="food-description">{t("tako")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Maki - Temaki </h2>
            <h5 className="underline-category">{t("catdesc2")}</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  {t("grilledsalmonskintitle")} <span> 5.00 </span>
                </p>
                <p className="food-description">{t("grilledsalmonskin")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake Maki <span> 5.50 </span>
                </p>
                <p className="food-description">{t("sakemaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tekka Maki <span> 6.00 </span>
                </p>
                <p className="food-description">{t("tekamaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Unakyu <span> 7.50 </span>
                </p>
                <p className="food-description">{t("unakyu")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Saba <span> 5.75 </span>
                </p>
                <p className="food-description">{t("karamesaba")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Sake <span> 6.00 </span>
                </p>
                <p className="food-description">{t("karamesake")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Maguro <span> 6.50 </span>
                </p>
                <p className="food-description">{t("karamemaguro")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Neri Hamachi <span> 6.50 </span>
                </p>
                <p className="food-description">{t("karamenerihamachi")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Boston <span> 6.50 </span>
                </p>
                <p className="food-description">{t("boston")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  New York <span> 6.50 </span>
                </p>
                <p className="food-description">{t("newyork")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  California <span> 6.50 </span>
                </p>
                <p className="food-description">{t("california")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">Kamikaze</p>
                <p className="food-description">{t("kamikaze")}</p>
                <ul>
                  <li>
                    {t("sake")} <span> 7.00 </span>
                  </li>
                  <li>
                    {t("maguro")} <span> 7.75 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 6.00 </span>
                </p>
                <p className="food-description">{t("tempura")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Philly <span> 7.75 </span>
                </p>
                <p className="food-description">{t("philly")}</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Tori Tori <span> 7.00 </span>
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
                  Quebec <span> 7.00 </span>
                </p>
                <p className="food-description">{t("quebec")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Montreal <span> 7.50 </span>
                </p>
                <p className="food-description">{t("montreal")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Twister <span> 7.50 </span>
                </p>
                <p className="food-description">{t("twister")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sasa du Chef <span> 7.75 </span>
                </p>
                <p className="food-description">{t("sasaduchef")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Niji Maki - Rainbow Roll <span> 7.75 </span>
                </p>
                <p className="food-description">{t("nijimaki")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  El Nino <span> 7.75 </span>
                </p>
                <p className="food-description">{t("elnino")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Aloha <span> 8.00 </span>
                </p>
                <p className="food-description">{t("aloha")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Volcano <span> 7.75 </span>
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
                  {t("spidertitle")} <span> 11.25 </span>
                </p>
                <p className="food-description">{t("spider")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Zen <span> 10.00 </span>
                </p>
                <p className="food-description">{t("zen")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("karamelobstertitle")} <span> 11.25 </span>
                </p>
                <p className="food-description">{t("karamelobster")}</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  {t("dragoneyetitle")} <span> 10.00 </span>
                </p>
                <p className="food-description">{t("dragoneye")}</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category"> Veggie Maki </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Kappa Maki <span> 4.00 </span>
                </p>
                <p className="food-description">Cucumber Roll</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Avocado Maki <span> 4.25 </span>
                </p>
                <p className="food-description">Avocado Roll</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Oshinko <span> 4.25 </span>
                </p>
                <p className="food-description">Marinated Radish, Cucumber</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Yasaimaki <span> 6.50 </span>
                </p>
                <p className="food-description">Steamed Vegetables</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Shoujin age <span> 6.50 </span>
                </p>
                <p className="food-description">Vegetable Tempura</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sicili <span> 6.50 </span>
                </p>
                <p className="food-description">Saute Vegetables</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category"> Sasa Sushi Speciality </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  France Maki <span> 17.00 </span>
                </p>
                <p className="food-description">
                  Salmon, White Fish, Shrimp Tempura, Avocado, Mango, Caviar
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Pizza <span> 10.25 </span>
                </p>
                <p className="food-description">
                  Rice Cracker, Smoked Salmon, Crab Stick, Avocado, Cucumber,
                  Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Caterpillar <span> 13.50 </span>
                </p>
                <p className="food-description">
                  Shrimp Tempura, Salmon, Crab Stick, Avocado, Marinated Rice
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  La Belle <span> 15.00 </span>
                </p>
                <p className="food-description">Tuna, Caviar, Asparagus</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  La Bete <span> 13.50 </span>
                </p>
                <p className="food-description">
                  Salmon, Caviar, Asparagus - Roll Lightly Fried
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tuna Special <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Pieces of Tuna Lightly Fried, Caviar, Green Onion, Special
                  Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Red Dragon <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Panko Shrimp, Tuna, Caviar, Crab Stick, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Dragon <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Eel, Crab Stick, Tempura, Caviar, Avocado, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Trust Me <span> 13.50 </span>
                </p>
                <p className="food-description">
                  Eel, Shrimp Tempura, Caviar, Tempura, Avocado, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Yin-Yang <span> 13.50 </span>
                </p>
                <p className="food-description">
                  Tuna, Salmon, Caviar, Special Avocado Sauce - Roll Lightly
                  Grilled
                </p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Rice Paper Roll </h2>
            <h5 className="underline-category">(Served with Special Sauce)</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Indochine <span> 8.00 </span>
                </p>
                <p className="food-description">
                  Salmon, Crab Stick, Caviar, Lettuce, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Illusion <span> 8.00 </span>
                </p>
                <p className="food-description">
                  Shrimp, Caviar, Mixed Salad, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Fantasia <span> 8.00 </span>
                </p>
                <p className="food-description">
                  Shrimp & Sweet Potato Tempura, Mixed Salad
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Exotica <span> 8.00 </span>
                </p>
                <p className="food-description">
                  Smoked Salmon, Caviar, Strawberry, Kiwi, Mango, Cucumber,
                  Mixed Salad
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Voilier <span> 11.00 </span>
                </p>
                <p className="food-description">
                  Grilled Shrimp & Red Pepper, Caviar, Vermicelli, Mixed Salad
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Passion <span> 11.00 </span>
                </p>
                <p className="food-description">
                  Shrimp, Crab Stick, Caviar, Mango, Cucumber, Vermicelli, Mixed
                  Salad
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Amoureux <span> 11.00 </span>
                </p>
                <p className="food-description">
                  Salmon & Crab Stick Panko, Caviar, Cucumber, Vermicelli, Mixed
                  Salad
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Nue <span> 12.75 </span>
                </p>
                <p className="food-description">
                  Vegetable Tempura, Shrimp, Caviar, Avocado
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alacarte;
