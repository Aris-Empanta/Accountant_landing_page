import "./css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerLogo from "./images/footerLogo.png"

export const Footer = () => {

    return(<div id="sectionsFooter">               
             <div className="footerParts">
                <h1 id="quickLinksTitle" target="_blank">Quick Links</h1>
                <a href="#/" className="footerLinks" target="_blank">Home</a>
                <a href="#/accounting" className="footerLinks" target="_blank">Accounting Services</a>
                <a href="#/taxServices" className="footerLinks" target="_blank">Tax Services</a>
                <a href="#/insurance" className="footerLinks" target="_blank">Insurance</a>
            </div>
            <div >
                <h1 id="contactUsTitle" >Contact Us</h1>
                <p className="footerContacts"><FontAwesomeIcon icon={ faPhone } className="footerContactIcon"/>&nbsp;
                    415-664-7262
                </p>
                <p className="footerContacts"><FontAwesomeIcon icon={ faLocationDot } className="footerContactIcon"/>&nbsp;  
                    18710 Blue Lake
                    Boston, CA 90066</p>
                <p className="footerContacts"><FontAwesomeIcon icon={ faEnvelope } className="footerContactIcon"/>&nbsp;
                    bost_accounts@outlook.com
                </p>
            </div>
            <div >
                <img src={ footerLogo } id="officeLogo"></img>
            </div>                                          
            </div>
            )
}