import './css/HomeUpperSection.css';
import writting_pen from './images/writting_pen.jpg';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faDollar} from '@fortawesome/free-solid-svg-icons';
import { faChartLine} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { HomeLowerSection } from "./HomeLowerSection.js";
import { IndividualServices  } from '../textVariables/homeTextVariables';
import { BusinessServices } from '../textVariables/homeTextVariables';
import { ValuationServices } from '../textVariables/homeTextVariables';
import { TaxServices } from '../textVariables/homeTextVariables';


//Below component holds the entire home section code, using 1 imported component for the lower home section
const HomeSection = () => {
  
  /*With below functions, the 2 last paragraphs in upper home section will appear
   only once we scroll to their ppsition.*/
  useEffect(() => {
        const navbarContainer = document.getElementById("barsContainer")
        const menu = document.getElementById("menu")

        //With below listener, once we scroll below the height of the images, the navbare gets a background color.
          window.addEventListener("scroll", () =>{
              if(window.pageYOffset > 370 && menu.style.display !== "flex"){
                navbarContainer.style.backgroundColor = "rgba(0,90,156,0.7)"
                navbarContainer.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)"
                navbarContainer.style.border = "1px solid black"
            }else{
                navbarContainer.style.backgroundColor = "transparent"
                navbarContainer.style.boxShadow = "none"
                navbarContainer.style.border = "none"
            }
            })        
         
        window.addEventListener("scroll", () => {         
          const element = document.querySelectorAll(".serviceParagraph")

          for( let i = 0; i < element.length; i++ ){
            const positionToAppear = window.innerHeight - 50
            const elementsDistanceTop = element[i].getBoundingClientRect().top

            if( positionToAppear >= elementsDistanceTop){
              element[i].style.opacity = 1;
              element[i].style.transform = "translateY(0)";
            }
           }
          }
        )
      }
    )
         
 
  return (
    <div className="HomeUpperSection">        
        <img src={ writting_pen } alt="writting pen" id="writting_pen"></img>          
        <h1 id="accountantOfficeTitle">BOSTON ACCOUNTANTS</h1>
        <h2 id="taxConsultantSubTitle">TAX CONSULTANT FOR&nbsp;&nbsp;
          <span id="services" >
            <Typed strings={[ 'ACCOUNTING MANAGEMENT',
                              'BUSINESS SETUP',
                              'ACCOUNTING SUPPORT',          
                              'BUSINESS CONSULTING'  ]}           
                   typeSpeed={50}
                   backSpeed={50}
                   loop />
          </span>
        </h2>       
        <div id="underHome">
          <div id="profileSection">
            <h1 id="profileTitle">Our Profile</h1>
            <div id="services1" className='serviceParagraph' >
              <div class="fontIcon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div class="servicesText">
                <h3>Individual Services</h3>
                <p id="header1"> { IndividualServices } </p>
              </div>
            </div>
            <div id="services2" className='serviceParagraph'  >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div class="servicesText">
                <h3>Business Services</h3>
                <p>{ BusinessServices }</p>
              </div>
            </div>
            <div id="services3" className='serviceParagraph' >
              <div class="fontIcon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div class="servicesText">
                <h3>Valuation Services</h3>
                <p id="header1">{ ValuationServices }</p>
              </div>
            </div>
            <div id="services4" className='serviceParagraph' >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div class="servicesText">
                <h3>Tax Services</h3>
                <p>{ TaxServices }</p>
              </div>
            </div>      
            <HomeLowerSection />                                           
          </div>                   
        </div>    
    </div>
  );
}

export default HomeSection