import React, { Component } from "react";
import i18next from "i18next";
import { withTranslation } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Alacarte from "./components/Menus/Alacarte/Alacarte";
import Combo from "./components/Menus/Combo/Combo";
import Supper from "./components/Menus/Supper/Supper";
import Gallery from "./components/Gallery/Gallery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: i18next.languages[0],
    };
  }

  changeLanguage = e => {
    console.log(e.target.id);
    const lng = e.target.id;
    this.setState({ value: lng }, () => {
      i18next.changeLanguage(lng);
    });

    // remove language '/en/' or '/fr/' if exists
    let path = window.location.pathname.replace(/\/[a-z]{2}/, "");

    let newPath;

    if (path === "/menus/supper") {
      newPath = path.replace(/\/(?:.(?!\/))+$/gim, "/souper");
    } else if (path === "/menus/souper") {
      newPath = path.replace(/\/(?:.(?!\/))+$/gim, "/supper");
    } else if (path === "/gallery") {
      newPath = path.replace(/\/(?:.(?!\/))+$/gim, "/galerie");
    } else if (path === "/galerie") {
      newPath = path.replace(/\/(?:.(?!\/))+$/gim, "/gallery");
    }

    if (typeof newPath === "string") {
      path = newPath;
    }

    // reload the page with the lang prefix and the translated path
    window.location.href = `/${lng}${path}`;
  };

  render() {
    const { value } = this.state;
    const { t } = this.props;

    return (
      <BrowserRouter>
        <div>
          <NavBar changeLanguage={this.changeLanguage} value={value} />
          <Route exact path="/" component={Home} />
          <Route exact path={`/${value}`} component={Home} />
          <Route
            path={`/${value}/menus/${t("urlcombo")}`}
            render={props => <Combo {...props} value={value} />}
          />
          <Route
            path={`/${value}/menus/${t("urlalacarte")}`}
            render={props => <Alacarte {...props} value={value} />}
          />
          <Route
            path={`/${value}/menus/${t("urlsupper")}`}
            render={props => <Supper {...props} value={value} />}
          />
          <Route path={`/${value}/${t("urlgallery")}`} component={Gallery} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default withTranslation("translations")(App);
