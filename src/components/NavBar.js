import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import  click  from "./audioClips/click.mp3";
import { showMenu } from '../functions/functions';
import './css/NavBar.css';
import { showLinks } from '../functions/functions';
import Logo from "./images/Logo.png"


//The navigation bar menu
const NavBar = () => {    
     
    const closeMenu = () => {
        const menu = document.getElementById("menu")
        const bars = document.getElementById("bars")
        const xIcon = document.getElementById("xIcon")
        const clickSound = document.getElementById("click")
        const menuLinks = document.querySelectorAll(".menuList")

        bars.style.display = 'initial'
        menu.style.display = 'none'
        xIcon.style.display = 'none'
        clickSound.play()
        for( let i=0; i < menuLinks.length; i++ ){
            menuLinks[i].style.opacity = 0
        }
    }

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
                <a className="menuList" id="home" href="#/" onClick={ closeMenu }> Home</a>               
                <a className="menuList" id="accounting" href="#/accounting" onClick={ closeMenu }> Accounting </a>           
                <a className="menuList" id="tax" href="#/taxServices" onClick={ closeMenu }> Tax Services</a>               
                <a className="menuList" id="insurance" href="#/insurance" onClick={ closeMenu }> Insurances</a>               
                <a className="menuList" id="contact" href="#/contact" onClick={ closeMenu }> Contact</a>               
           </div>
        </div>
    )
}

export default NavBar