import React from "react";
import { NavLink } from "react-router-dom";
import "./Supper.css";

const Supper = () => {
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
            <h2 className="underline-category"> Appetizer </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Agedashi Tofu <span> 5.00 </span>
                </p>
                <p className="food-description">
                  Lightly fried tofu with tempura sauce and bonito flakes
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Yakitori <span> 6.25 </span>
                </p>
                <p className="food-description">
                  Grilled chicken skewers serve with teriyaki sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Gyoza <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Japanese dumplings serve with house sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Vegetable Tempura <span> 7.00 </span>
                </p>
                <p className="food-description">
                  Deep fried vegetables serve with tempura sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Haru Maki <span> 7.50 </span>
                </p>
                <p className="food-description">
                  Vegetable, pork and shrimp rolls fried
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 9.00 </span>
                </p>
                <p className="food-description">
                  Deep fried shrimps and vegetables, serve with tempura sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Pizza <span> 10.25 </span>
                </p>
                <p className="food-description">
                  Rice cake with cucumber, avocado, smoked salmon and crabstick
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  El Nina <span> 14.00 </span>
                </p>
                <p className="food-description">
                  Deep fried eggplant, and lightly grilled white tuna serve with
                  spicy sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Avalanche <span> 14.00 </span>
                </p>
                <p className="food-description">
                  Mackerel and grilled tomato, caviar topping, serve with spicy
                  sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tuna Steak <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Lightly fried red tuna serves with chef’s sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tuna Special <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Lightly grilled Tuna, caviar topping, serve with chef’s sauce
                </p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category"> Soup </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Miso Shiru <span> 3.25 </span>
                </p>
                <p className="food-description">White soya bean paste soup</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Seafood Miso <span> 6.00 </span>
                </p>
                <p className="food-description">Fish and seafood miso soup</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sumashi <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Japanese dumplings serve with house sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">Udon</p>
                <p className="food-description">Shrimp broth with noodles</p>
                <ul>
                  <li>
                    Vegetarian <span> 5.00 </span>
                  </li>
                  <li>
                    Chicken <span> 5.50 </span>
                  </li>
                  <li>
                    Shrimp Tempura <span> 6.00 </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2 className="underline-category"> Salad </h2>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Mixed Salad <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Mixed salad serves with house dressing{" "}
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ohitashi <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Steamed spinach serves with sesame sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Seafood Salad <span> 12.00 </span>
                </p>
                <p className="food-description">
                  Mixed salad with crabstick, shrimps, and smoked salmon serve
                  with house dressing
                </p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Hot Meals </h2>
            <h5 className="underline-category">(Served with miso soup)</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Chicken Katsu <span> 17.00 </span>
                </p>
                <p className="food-description">
                  Fried breaded chicken with Katsu sauce (and steamed rice?)
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">Teriyaki</p>
                <p className="food-description">
                  Grilled dish garnished with teriyaki sauce and serves with
                  vegetables and steamed rice
                </p>
                <ul>
                  <li>
                    Vegetarian <span> 15.00 </span>
                  </li>
                  <li>
                    Chicken <span> 17.00 </span>
                  </li>
                  <li>
                    Salmon <span> 19.00 </span>
                  </li>
                  <li>
                    Steak <span> 21.00 </span>
                  </li>
                  <li>
                    Seafood <span> 22.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">Tempura</p>
                <p className="food-description">
                  Deep fried dish in light batter serves with steamed rice and
                  tempura sauce
                </p>
                <ul>
                  <li>
                    Vegetarian <span> 17.00 </span>
                  </li>
                  <li>
                    Shrimp <span> 21.00 </span>
                  </li>
                  <li>
                    Seafood <span> 24.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Seafood Yaki Udon <span> 28.00 </span>
                </p>
                <p className="food-description">
                  Stir fried shrimps and scallops with shichimi, serve with yaki
                  udon (spicy)
                </p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Sushi - Sashimi </h2>
            <h5 className="underline-category">(Served with miso soup)</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Assorted Sushi (16pcs) <span> 28.00 </span>
                </p>
                <p className="food-description">
                  6 nigri sushi et 10 pcs of rolls
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sushi & Sashimi (17pcs) <span> 28.00 </span>
                </p>
                <p className="food-description">
                  5 nigri sushi, 6 pcs sashimi et 6pcs of rolls
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sashimi (16pcs)<span> 28.00 </span>
                </p>
                <p className="food-description">
                  16 pcs sashimi serve with sushi rice
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supper;
