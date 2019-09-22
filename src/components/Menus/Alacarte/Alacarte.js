import React from "react";
import { NavLink } from "react-router-dom";
import "./Alacarte.css";

const Alacarte = () => {
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
            <h5 className="underline-category">
              (Choice of either Nigiri (2pcs) or Sashimi (2pcs or 3pcs indicated
              by *) unless stated otherwise)
            </h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Maguro * <span> 6.00 </span>
                </p>
                <p className="food-description">Tuna</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Albacore * <span> 5.50 </span>
                </p>
                <p className="food-description">White Tuna</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hamachi * <span> 6.50 </span>
                </p>
                <p className="food-description">Yellowtail</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake * <span> 5.50 </span>
                </p>
                <p className="food-description">Salmon</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Shiromi * <span> 5.00 </span>
                </p>
                <p className="food-description">White Fish</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Shime-Saba * <span> 5.00 </span>
                </p>
                <p className="food-description">Mackerel</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Karame Hotategai (Nigiri only) <span> 6.00 </span>
                </p>
                <p className="food-description">
                  Scallop, Caviar, Strawberry, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Hotategai (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">Scallop</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ikura (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">Salmon Roe</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sunrise (Nigiri only) <span> 5.75 </span>
                </p>
                <p className="food-description">Caviar, Scallop</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tobiko (Nigiri only) <span> 5.50 </span>
                </p>
                <p className="food-description">Flying Fish Roe</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Massago (Nigiri only) <span> 5.00 </span>
                </p>
                <p className="food-description">Smelt Roe</p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Sushi Tempura <span> 5.00 </span>
                </p>
                <p className="food-description">
                  Shrimp Tempura, Teriyaki Sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake Kunsei <span> 5.50 </span>
                </p>
                <p className="food-description">Smoked Salmon</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Ebi <span> 4.75 </span>
                </p>
                <p className="food-description">Shrimp</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Unagi <span> 6.00 </span>
                </p>
                <p className="food-description">Freshwater Eel</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Kani-Kama <span> 4.75 </span>
                </p>
                <p className="food-description">Crab Stick</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tako <span> 5.75 </span>
                </p>
                <p className="food-description">Octopus</p>
              </li>
            </ul>
          </div>

          <div className="food-category">
            <h2> Maki - Temaki </h2>
            <h5 className="underline-category">(what)</h5>
            <ul>
              <li className="food-item">
                <p className="food-title">
                  Grilled Salmon Skin <span> 5.00 </span>
                </p>
                <p className="food-description">
                  Grilled Salmon Skin, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sake Maki <span> 5.50 </span>
                </p>
                <p className="food-description">Salmon Roll</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tekka Maki <span> 6.00 </span>
                </p>
                <p className="food-description">Tuna Roll</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Unakyu <span> 7.50 </span>
                </p>
                <p className="food-description">Eel, Cucumber</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Saba <span> 5.75 </span>
                </p>
                <p className="food-description">Mackerel, Green Onion</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Sake <span> 6.00 </span>
                </p>
                <p className="food-description">Salmon, Green Onion</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Maguro <span> 6.50 </span>
                </p>
                <p className="food-description">Tuna, Green Onion</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Neri Hamachi <span> 6.50 </span>
                </p>
                <p className="food-description">Yellowtail, Green Onion</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Boston <span> 6.50 </span>
                </p>
                <p className="food-description">
                  Shrimp, Crab Stick, Cucumber, Lettuce, Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  New York <span> 6.50 </span>
                </p>
                <p className="food-description">
                  Caviar, Crab Stick, Cucumber, Lettuce, Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  California <span> 6.50 </span>
                </p>
                <p className="food-description">
                  Caviar, Crab Stick, Cucumber, Avocado, Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">Kamikaze</p>
                <p className="food-description">
                  Cucumber, Green Onion, Avocado, Spicy Mayo
                </p>
                <ul>
                  <li>
                    Salmon <span> 7.00 </span>
                  </li>
                  <li>
                    Tuna <span> 7.75 </span>
                  </li>
                </ul>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Tempura <span> 6.00 </span>
                </p>
                <p className="food-description">Shrimp, Salmon, Green Onion</p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Philly <span> 7.75 </span>
                </p>
                <p className="food-description">
                  Smoked Salmon, Caviar, Cucumber, Spinach, Cream Cheese
                </p>
              </li>

              <li className="food-item">
                <p className="food-title">
                  Tori Tori <span> 7.00 </span>
                </p>
                <p className="food-description">
                  Chicken Katsu, Tempura, Caviar, Avocado, Cucumber
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Three Amigos <span> 7.00 </span>
                </p>
                <p className="food-description">
                  Three Types of Fish, Caviar, Green Onion
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Quebec <span> 7.00 </span>
                </p>
                <p className="food-description">
                  Shrimp Tempura, Crab Stick, Avocado, Green Onion, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Montreal <span> 7.50 </span>
                </p>
                <p className="food-description">
                  Salmon, White Fish, Green Onion Tempura
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Twister <span> 7.50 </span>
                </p>
                <p className="food-description">
                  Shrimp, Green Onion, Udon Tempura
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Sasa du Chef <span> 7.75 </span>
                </p>
                <p className="food-description">
                  Scallop Katsu, Caviar, Strawberry, Asparagus
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Niji Maki - Rainbow Roll <span> 7.75 </span>
                </p>
                <p className="food-description">
                  Tuna, Salmon, Crab Stick, Caviar, Avocado, Cucumber, Spicy
                  Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  El Nino <span> 7.75 </span>
                </p>
                <p className="food-description">
                  White Tuna, Eggplant Tempura, Caviar, Jalapeno Sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Aloha <span> 8.00 </span>
                </p>
                <p className="food-description">
                  Tuna, Caviar, Mango, Tempura, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Volcano <span> 7.75 </span>
                </p>
                <p className="food-description">
                  Grilled Mackerel, Sun-dried Tomato, Caviar, Jalapeno Sauce
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Eye of the Tiger <span> 7.75 </span>
                </p>
                <p className="food-description">
                  Three Types of Fish Tempura, Spinach Tempura, Caviar
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Spider <span> 11.25 </span>
                </p>
                <p className="food-description">
                  Soft-shell Crab, Caviar, Avocado, Cucumber, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Zen <span> 10.00 </span>
                </p>
                <p className="food-description">
                  Nori Tempura, Eel, Crab Stick, Caviar, Avocado, Green Onion
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Karame Lobster <span> 11.25 </span>
                </p>
                <p className="food-description">
                  Lobster Tempura, Caviar, Avocado, Spicy Mayo
                </p>
              </li>
              <li className="food-item">
                <p className="food-title">
                  Dragon's Eye <span> 10.00 </span>
                </p>
                <p className="food-description">
                  White Fish, Carrot, Green Onion Tempura
                </p>
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
                  Shoujin' age <span> 6.50 </span>
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
                  France's Maki <span> 17.00 </span>
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
                  L'Indochine <span> 8.00 </span>
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
