import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import mainLogo1 from "./mainLogo1.png";

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showSubMenu: false
    };
  }

  handleClickMenu = () => {
    const { showMenu } = this.state;

    this.setState({ showMenu: !showMenu });
  };

  closeMenu = () => {
    this.setState({ showMenu: false, showSubMenu: false });
  };

  handleClickSubMenu = () => {
    const { showSubMenu } = this.state;

    this.setState({ showSubMenu: !showSubMenu });
  };

  render() {
    const { showMenu, showSubMenu } = this.state;

    const MenuLink = ({ to, children }) => {
      return (
        <NavLink onClick={this.closeMenu} className="nav-menu_link" to={to}>
          {children}
        </NavLink>
      );
    };

    return (
      <header className="underline">
        <nav className="header-flex">
          <Link onClick={this.closeMenu} className="logo-container" to="/">
            <img className="logo" src={mainLogo1} alt="logo" />
          </Link>
          <ul className={`nav-links ${showMenu ? "showMenu" : ""}`}>
            <li className="menu-container">
              <div className="menu-link">
                <MenuLink to="/menus/alacarte">Menu</MenuLink>
                <FontAwesomeIcon
                  onClick={this.handleClickSubMenu}
                  className="submenu-icon"
                  icon={faAngleDown}
                />
              </div>
              <ul className={`submenu ${showSubMenu ? "showSubMenu" : ""}`}>
                <li>
                  <MenuLink to="/menus/alacarte">A La Carte</MenuLink>
                </li>
                <li>
                  <MenuLink to="/menus/lunch">Lunch</MenuLink>
                </li>
                <li>
                  <MenuLink to="/menus/supper">Supper</MenuLink>
                </li>
              </ul>
            </li>
            <li>
              <MenuLink to="/gallery">Gallery</MenuLink>
            </li>
            <li>
              <MenuLink to="/contact">Contact</MenuLink>
            </li>
          </ul>

          <FontAwesomeIcon
            onClick={this.handleClickMenu}
            className="mobile-icon"
            icon={faBars}
          />
        </nav>
      </header>
    );
  }
}

export default NavBar;
