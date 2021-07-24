import React, { Fragment } from "react";
import ModalSI from "./ModalSI";
import logo from "../Icons/technova-logo1.jpg";

// import user from "../Icons/user.png";

const Header = () => {
  return (
    <Fragment>
      <header className="header_startingScreen">
        <div id="title_store">
          <div className="divHeaderT">
            <img src={logo} alt="logo" height="auto" width="100vw"></img>
            <h1>
              <a href="/">TECHNOVA</a>
            </h1>
          </div>
        </div>
        <div className="header_side_right">
          <nav className="navHeader">
            <a href="#jump_start" className="a_items_header">
              Inicio
            </a>
            
            <a href="#jump_about_us" className="a_items_header">
              Sobre nosotros
            </a>
            <a href="#jump_contact" className="a_items_header">
              Contacto
            </a>
          <ModalSI />
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
