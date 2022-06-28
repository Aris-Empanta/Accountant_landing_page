import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import  click  from "./audioClips/click.mp3";
import { showMenu } from '../functions/functions';
import './css/NavBar.css';
import { useEffect } from 'react';
import { showLinks } from '../functions/functions';
import Logo from "./images/Logo.png"

//The navigation bar menu
export const NavBar = () => {    
             
    return(
        <div className="navBar">
            <div id="barsContainer">
                <img src={ Logo } id="navBarLogo"></img>
                <button id="navbarButton" onClick={() => {showMenu();showLinks();}}>
                    <FontAwesomeIcon icon={faBars} id='bars'/>
                    <FontAwesomeIcon icon={faXmark} id='xIcon'/>
                    <audio src={click} id="click"/>
                </button>       
            </div>
            <div id="menu"  class="menuBar">
                <a className="menuList" id="home" href='/' >Home</a>
                <a className="menuList" id="accounting" href='/accounting' >Accounting</a>
                <a className="menuList" id="tax" href="/taxServices" >Tax Services</a>
                <a className="menuList" id="insurance" href="/insurance" >Insurances</a>
                <a className="menuList" id="contact" href="/contact" >Contact</a>
           </div>
        </div>
    )
}