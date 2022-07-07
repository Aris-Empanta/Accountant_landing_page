import React from 'react';
import "./css/HomeFooterSection.css"
import accounting from "./images/accounting.jpg"
import taxServices from "./images/tax_services.jpg"
import insurance from "./images/insurance.jpg"
import footerLogo from "./images/footerLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


class HomeFooterSection extends React.Component {

    constructor(props) {
      super(props);
    }    

    /*With Below Listener, the 3 "cards" (accounting, tax services, insurance)
     will rotate and appear onscroll */
    componentDidMount(){      
  
      window.addEventListener("scroll", () => {

          const revealElements = document.querySelectorAll(".portraitLinks");

          for(let i=0; i < revealElements.length; i++ ){

            const windowHeight = window.innerHeight;
            const revealElementsDistance = revealElements[i].getBoundingClientRect().top;
            
            if(windowHeight >=  revealElementsDistance ){
              revealElements[i].classList.add("rotateOnX")
            }
          }
        }
      )
      
      /*With the functions bellow, once we hover on either of three services "cards",
       a description text of each service will come up.*/
      const accounting = document.getElementById("firstLink")
      const taxServices = document.getElementById("secondLink")
      const insurance = document.getElementById("thirdLink")
      const accountingDescription = document.getElementById("firstDescription")
      const taxServicesDescription = document.getElementById("secondDescription")
      const insuranceDescription = document.getElementById("thirdDescription")
      //We adjust description box height for mobile and larger screens:
      const mobileScreen = window.matchMedia("(max-width: 350px)")
      const largerScreen = window.matchMedia("(min-width: 351px)")


      accounting.addEventListener("mouseover", () => {
          if(mobileScreen.matches){
            accountingDescription.style.height = "135px"
          }else if(largerScreen.matches){
            accountingDescription.style.height = "105px"
          }
        }
      )

      accounting.addEventListener("mouseleave", () => {
          accountingDescription.style.height = "0px"
        }
      )
    

      taxServices.addEventListener("mouseover", () => {
        if(mobileScreen.matches){
          taxServicesDescription.style.height = "135px"
        }else if(largerScreen.matches){
          taxServicesDescription.style.height = "105px"
        }
      }
    )

      taxServices.addEventListener("mouseleave", () => {
        taxServicesDescription.style.height = "0px"
      }
    )


      insurance.addEventListener("mouseover", () => {
        if(mobileScreen.matches){
          insuranceDescription.style.height = "135px"
        }else if(largerScreen.matches){
          insuranceDescription.style.height = "105px"
        }
     }
    )

      insurance.addEventListener("mouseleave", () => {
        insuranceDescription.style.height = "0px"
     }
    )
  }

    render(){
        return   <div id="linksGrid">            
                    <h1 id="linksTitle">Our Services</h1>
                    <div id="firstLink" className="portraitLinks">
                      <a  href="/accounting" target='_blank'>
                        <img className ="serviceImage" src={accounting}></img>
                        <div id="firstDescription" className='serviceDescription'>
                          <p class="servicesSummary"> We mannage the accounting and the bookkeeping of businesses and persons.</p>
                        </div>
                        <div class="serviceTitle"> Accounting Services</div>
                        <div class="servicesIconBox">
                        <FontAwesomeIcon icon={ faBookOpen } className="servicesIcon" />
                        </div> 
                      </a>
                    </div>
                    <div id="secondLink" className="portraitLinks">
                      <a href='/taxServices' target="_blank">
                        <img className="serviceImage" src={taxServices}></img>
                        <div id="secondDescription" className='serviceDescription'>
                          <p class="servicesSummary"> Our experienced proffessionals will help you save real money<faPhone /> on taxes.</p>
                        </div>
                        <div class="serviceTitle"> Tax Services </div>
                        <div class="servicesIconBox">
                        <FontAwesomeIcon icon={ faCalculator } className="servicesIcon" />
                        </div> 
                      </a>
                    </div>
                    <div id="thirdLink" className="portraitLinks">
                      <a href='/insurance' target="_blank">
                        <img className ="serviceImage" src={insurance}></img>
                        <div id="thirdDescription" className='serviceDescription'>
                          <p class="servicesSummary"> We have the best insurance solutions depending your needs</p>
                        </div>
                        <div class="serviceTitle"> Insurance </div>
                        <div class="servicesIconBox">
                        <FontAwesomeIcon icon={ faHandshake } className="servicesIcon" />
                        </div> 
                      </a>  
                    </div>   
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
}

export { HomeFooterSection } 