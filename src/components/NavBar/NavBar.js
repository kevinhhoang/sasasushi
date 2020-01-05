import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import mainLogo1 from "./mainLogo1.png";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showSubMenu: false,
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
    const { t, changeLanguage, value } = this.props;

    const MenuLink = ({ to, children }) => {
      return (
        <NavLink to={to} onClick={this.closeMenu} className="nav-menu_link">
          {children}
        </NavLink>
      );
    };

    let languageOption;
    if (value === "en") {
      languageOption = (
        <Link to="#" onClick={changeLanguage} id="fr" className="nav-menu_link">
          Francais
        </Link>
      );
    } else {
      languageOption = (
        <Link to="#" onClick={changeLanguage} id="en" className="nav-menu_link">
          English
        </Link>
      );
    }

    return (
      <header className="underline">
        <nav className="header-flex">
          <Link
            onClick={this.closeMenu}
            className="logo-container"
            to={`/${value}`}
          >
            <img className="logo" src={mainLogo1} alt="logo" />
          </Link>
          <ul className={`nav-links ${showMenu ? "showMenu" : ""}`}>
            <li className="menu-container">
              <div className="menu-link">
                <MenuLink to={`/${value}/menus/${t("urlalacarte")}`}>
                  {t("menu")}
                </MenuLink>
                <FontAwesomeIcon
                  onClick={this.handleClickSubMenu}
                  className="submenu-icon"
                  icon={faAngleDown}
                />
              </div>
              <ul className={`submenu ${showSubMenu ? "showSubMenu" : ""}`}>
                <li>
                  <MenuLink to={`/${value}/menus/${t("urlalacarte")}`}>
                    {t("alacarte")}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={`/${value}/menus/${t("urlcombo")}`}>
                    {t("combo")}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={`/${value}/menus/${t("urllunch")}`}>
                    {t("lunch")}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={`/${value}/menus/${t("urlsupper")}`}>
                    {t("supper")}
                  </MenuLink>
                </li>
              </ul>
            </li>
            <li>
              <MenuLink to={`/${value}/${t("urlgallery")}`}>
                {t("gallery")}
              </MenuLink>
            </li>
            <li>
              <MenuLink to={`/${value}/contact`}>{t("contact")}</MenuLink>
            </li>
            <li>{languageOption}</li>
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
