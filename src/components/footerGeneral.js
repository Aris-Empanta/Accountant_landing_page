import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerLogo from "./images/footerLogo.png"

export const Footer = () => {

    return <div >
             <div id="footer">
                      <div id="footerChildren">
                        <div class="footerGrandChildren">
                          <h1 id="quickLinksTitle">Quick Links</h1>
                          <a className='quickLinks' href="#">Home</a>
                          <a className='quickLinks' href="#">Accounting Services</a>
                          <a className='quickLinks' href="#">Tax Services</a>
                          <a className='quickLinks' href="#">Insurance</a>
                        </div>
                        <div id="contactUs" class="footerGrandChildren">
                          <h1 id="contactTitle" >Contact Us</h1>
                          <p className='contactDetails'><FontAwesomeIcon icon={ faPhone } className="contactIcons" />
                            415-664-7262
                          </p>
                          <p className='contactDetails'><FontAwesomeIcon icon={ faLocationDot } className="contactIcons" />  
                            18710 Blue Lake
                            Boston, CA 90066</p>
                          <p className='contactDetails'><FontAwesomeIcon icon={ faEnvelope } className="contactIcons" />
                           bost_accounts@outlook.com
                          </p>
                        </div>
                        <div class="footerGrandChildren" id="footerBrand">
                          <img src={ footerLogo } id="footerLogo"></img>
                        </div>
                      </div>
                    </div>            
           </div>
}