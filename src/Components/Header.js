import React, { Fragment } from "react";
import Modal from "./Modal.js";
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
          <button className="button_header">
            <a href="#jump_start" className="a_items_header">
              Inicio
            </a>
          </button>
          <button className="button_header">
            <a href="#jump_about_us" className="a_items_header">
              Sobre nosotros
            </a>
          </button>
          <button className="button_header">
            <a href="#jump_contact" className="a_items_header">
              Contacto
            </a>
          </button>
          <Modal />
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
