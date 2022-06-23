import React from 'react';
import "./css/CustomerReview.css"
import accounting from "./images/accounting.jpg"
import taxServices from "./images/tax_services.jpg"
import insurance from "./images/insurance.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';



class CustomerReview extends React.Component {

    constructor(props) {
      super(props);
    }    

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

      const accounting = document.getElementById("firstLink")
      const taxServices = document.getElementById("secondLink")
      const insurance = document.getElementById("thirdLink")
      const accountingDescription = document.getElementById("firstDescription")
      const taxServicesDescription = document.getElementById("secondDescription")
      const insuranceDescription = document.getElementById("thirdDescription")


      accounting.addEventListener("mouseover", () => {
          accountingDescription.style.height = "100px"
        }
      )

      accounting.addEventListener("mouseleave", () => {
          accountingDescription.style.height = "0px"
        }
      )
    

      taxServices.addEventListener("mouseover", () => {
        taxServicesDescription.style.height = "100px"
      }
    )

      taxServices.addEventListener("mouseleave", () => {
        taxServicesDescription.style.height = "0px"
      }
    )


      insurance.addEventListener("mouseover", () => {
        insuranceDescription.style.height = "100px"
     }
    )

      insurance.addEventListener("mouseleave", () => {
        insuranceDescription.style.height = "0px"
     }
    )
  }

    render(){
        return   <div class="customerReview" id="linksGrid">            
                    <h1 id="linksTitle">Our Services</h1>
                    <div id="firstLink" className="portraitLinks">
                      <img className ="io" src={accounting}></img>
                      <div id="firstDescription" className='serviceDescription'>
                        <p class="servicesSummary"> We mannage the accounting and the bookkeeping of businesses and persons.</p>
                      </div>
                      <div class="serviceTitle"> Accounting Services</div>
                      <div class="servicesIconBox">
                       <FontAwesomeIcon icon={ faBookOpen } className="servicesIcon" />
                      </div> 
                    </div>
                    <div id="secondLink" className="portraitLinks">
                      <img className="io" src={taxServices}></img>
                      <div id="secondDescription" className='serviceDescription'>
                        <p class="servicesSummary"> Our experienced proffessionals will help you save real money on taxes.</p>
                      </div>
                      <div class="serviceTitle"> Tax Services </div>
                      <div class="servicesIconBox">
                       <FontAwesomeIcon icon={ faCalculator } className="servicesIcon" />
                      </div> 
                    </div>
                    <div id="thirdLink" className="portraitLinks">
                      <img className ="io" src={insurance}></img>
                      <div id="thirdDescription" className='serviceDescription'>
                        <p class="servicesSummary"> We have the best insurance solutions depending your needs</p>
                      </div>
                      <div class="serviceTitle"> Insurance </div>
                      <div class="servicesIconBox">
                       <FontAwesomeIcon icon={ faHandshake } className="servicesIcon" />
                      </div> 
                    </div>               
                 </div>                          
        }
}

export { CustomerReview } 