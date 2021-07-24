import React from 'react';
import InstagramIcon from '../Icons/instagram.png'; 
import TwitterIcon from '../Icons/gorjeo.png'; 
import WhatsappIcon from '../Icons/whatsapp.png'; 
import FacebookIcon from '../Icons/facebook.png'; 


const Footer = () => {

    return <div id="jump_contact">
        <footer className="footer_startingScreen">
            <div className="footer_side_left">
               <div className="contact_footer">
                    <h1>Contacto</h1>
               </div>
               <div className="contact_footer_info info_footer">
                    <h4>2651456</h4>
                    <h4>305 963 8425</h4>
                    <h4>Technova@gmail.com</h4>
                </div>
            </div>
            <div className="footer_side_right">
               <div className="allies_footer">
                    <h1>Aliados</h1>
               </div>
               <div className="info_footer">
                    <h4>Lenovo</h4>
                    <h4>Exito</h4>
                    <h4>Samsung</h4>
                </div>
            </div>
            <div className="icons_social_media">
                <a href= "https://www.instagram.com/" target="blank"><img src={InstagramIcon} className="icons_footer"></img></a>
                <a href= "https://www.whatsapp.com/" target="blank"><img src={WhatsappIcon} className="icons_footer"></img></a>
                <a href= "https://www.twitter.com/" target="blank"><img src={TwitterIcon} className="icons_footer"></img></a>
                <a href= "https://www.facebook.com/" target="blank"><img src={FacebookIcon} className="icons_footer"></img></a>
            </div>  


        </footer>
        <div>
            

        </div>

    </div>

}
export default Footer; 