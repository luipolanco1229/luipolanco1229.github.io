import React from 'react';
import Modal from './Modal';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import user from "../Icons/user.png";

const Header = () => {

    return (<div>
        <header className="header_startingScreen">
               <div id="title_store">
                    <h1><a href="#jump_start" >TECHNOVA</a></h1>
               </div>
               <div className="header_side_right">
                    <button className="button_header"><a href="#jump_start" className="a_items_header">Inicio</a></button>
                    <button className="button_header"><a href="#jump_about_us" className="a_items_header"> Sobre nosotros</a></button>
                    <button className="button_header"><a href="#jump_contact" className="a_items_header">Contacto</a></button>
                    <Modal  state={false} />
                </div>
        </header>
        
        </div>
    )


}
export default Header; 