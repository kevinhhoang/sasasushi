import React from "react";
import i18next from "i18next";
import { withTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import mainLogo1 from "./mainLogo1.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showSubMenu: false,
      value: i18next.language
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

  changeLanguage = e => {
    const lng = e.target.value;
    this.setState({ value: lng }, () => {
      i18next.changeLanguage(lng);
    });
  };

  render() {
    const { showMenu, showSubMenu } = this.state;
    const { t } = this.props;

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
                <MenuLink to="/menus/alacarte">{t("menu")}</MenuLink>
                <FontAwesomeIcon
                  onClick={this.handleClickSubMenu}
                  className="submenu-icon"
                  icon={faAngleDown}
                />
              </div>
              <ul className={`submenu ${showSubMenu ? "showSubMenu" : ""}`}>
                <li>
                  <MenuLink to="/menus/alacarte">{t("alacarte")}</MenuLink>
                </li>
                <li>
                  <MenuLink to="/menus/lunch">{t("lunch")}</MenuLink>
                </li>
                <li>
                  <MenuLink to="/menus/supper">{t("supper")}</MenuLink>
                </li>
              </ul>
            </li>
            <li>
              <MenuLink to="/gallery">{t("gallery")}</MenuLink>
            </li>
            <li>
              <MenuLink to="/contact">{t("contact")}</MenuLink>
            </li>
            <li>
              <button type="button" onClick={this.changeLanguage} value="en">
                EN
              </button>
              <button type="button" onClick={this.changeLanguage} value="fr">
                FR
              </button>
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

export default withTranslation("translations")(NavBar);
