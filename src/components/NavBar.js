import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import  click  from "./audioClips/click.mp3";
import { showMenu } from '../functions/functions';
import './css/NavBar.css';
import { useEffect } from 'react';
import { showLinks } from '../functions/functions';

//The navigation bar menu
export const NavBar = () => {
    
    

    //With below listener, once we scroll below the height of the images, the navbare gets a background color.
    useEffect( () => {  

                window.addEventListener("scroll", () =>{
                    if(window.pageYOffset > 370 && document.getElementById("menu").style.display !== "flex"){
                        document.getElementById("barsContainer").style.backgroundColor = "#005A9C"
                        document.getElementById("barsContainer").style.opacity = 0.7
                        document.getElementById("barsContainer").style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)"
                        document.getElementById("barsContainer").style.border = "1px solid black"
                    }else{
                        document.getElementById("barsContainer").style.backgroundColor = "transparent"
                        document.getElementById("barsContainer").style.opacity = 1
                        document.getElementById("barsContainer").style.boxShadow = "none"
                        document.getElementById("barsContainer").style.border = "none"
                    }
                  })        
                }
             )
             
    return(
        <div className="navBar">
            <div id="barsContainer">
                <button id="navbarButton" onClick={() => {showMenu();showLinks();}}>
                    <FontAwesomeIcon icon={faBars} id='bars'/>
                    <FontAwesomeIcon icon={faXmark} id='xIcon'/>
                    <audio src={click} id="click"/>
                </button>       
            </div>
            <div id="menu"  class="menuBar">
                <a className="menuList" id="homeSection" >Home</a>
                <a className="menuList" id="aboutUsSection" >About us</a>
                <a className="menuList" id="insuranceSection" >Services</a>
                <a className="menuList" id="contactSection" >Contact</a>
           </div>
        </div>
    )
}