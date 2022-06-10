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
                const xIcon = document.getElementById("xIcon")    

                window.addEventListener("scroll", () =>{
                    if(window.pageYOffset > 370){
                        document.getElementById("barsContainer").style.backgroundColor = "silver"
                    }else{
                        document.getElementById("barsContainer").style.backgroundColor = "transparent"
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
                <a className="menuList" id="insuranceSection" >Insurance</a>
                <a className="menuList" id="contactSection" >Contact</a>
           </div>
        </div>
    )
}