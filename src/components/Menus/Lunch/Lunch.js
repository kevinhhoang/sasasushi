import React from "react";
import { NavLink } from "react-router-dom";
import "./Lunch.css";

const Lunch = () => {
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
                  Agedashi Tofu <span> 4.25 </span>
                </p>
                <p className="food-description">
                  Lightly fried tofu with tempura sauce and bonito flakes
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Yakitori <span> 5.75 </span>
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
                  Vegetable Tempura <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Deep fried vegetables serve with tempura sauce
                </p>
              </li>
            </ul>
          </div>
          <div className="food-category">
            <h2> Hot Meals </h2>
            <h5 className="underline-category">
              (Served with miso soup or salad, rice included)
            </h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Chicken Katsu <span> 14.00 </span>
                </p>
                <p className="food-description">
                  Fried breaded chicken with Katsu sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">Teriyaki</p>
                <p className="food-description">
                  Grilled dish garnished with teriyaki sauce serve with
                  vegetables
                </p>
                <ul>
                  <li>
                    Chicken <span> 14.00 </span>
                  </li>
                  <li>
                    Salmon <span> 15.00 </span>
                  </li>
                  <li>
                    Steak <span> 18.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Deep fried shrimps and vegetables in light batter, serve with
                  tempura sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sasa Special <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Grilled chicken brochettes, and deep fried shrimps vegetables
                  in batter served with teriyaki sauce
                </p>
              </li>
            </ul>
          </div>
          <div className="food-category">
            <h2> Sushi Combo </h2>
            <h5 className="underline-category">
              (Served with miso soup or salad)
            </h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Sushi Moriowase <span> 16.00 </span>
                </p>
                <p className="food-description">
                  Assortment of raw fish and shellfish sushi and Kamikaze maki
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">Sashimi & Maki</p>
                <p className="food-description">
                  Assortment of raw fish sashimi served with sushi rice
                </p>
                <ul>
                  <li>
                    without Rice <span> 16.00 </span>
                  </li>
                  <li>
                    with Rice <span> 17.00 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Maki Combo <span> 12.00 </span>
                </p>
                <p className="food-description">
                  Combo of Kamikaze and California
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
