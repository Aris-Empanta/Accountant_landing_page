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



export const HomeSection = () => {
  

  useEffect(() => {

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
        <h1 id="accountantOfficeTitle">ACCOUNTANT OFFICE IN BOSTON</h1>
        <h2 id="taxConsultantSubTitle">TAX CONSULTANT FOR&nbsp;&nbsp;
          <span id="services" >
            <Typed 
            strings={[
              'ACCOUNTING MANAGEMENT',
              'BUSINESS SETUP',
              'ACCOUNTING SUPPORT',          
              'BUSINESS CONSULTING'
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
            />
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
                <p id="header1">We work with individuals to provide tax
                                 planning and preparation, estate and gift 
                                 tax planning. We can also assist with personal 
                                 financial statement preparation and compilation, 
                                 as well as financial consulting and planning.
                </p>
              </div>
            </div>
            <div id="services2" className='serviceParagraph'  >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div class="servicesText">
                <h3>Business Services</h3>
                <p>We provide accounting, bookkeeping, 
                   payroll and tax preparation services
                   to established businesses. We also enjoy 
                   helping start-up businesses launch through 
                   consulting, financial analysis, projections
                   and forecasts.
                </p>
              </div>
            </div>
            <div id="services3" className='serviceParagraph' >
              <div class="fontIcon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div class="servicesText">
                <h3>Valuation Services</h3>
                <p id="header1"> We help businesses navigate complex 
                                financial situations, such as mergers 
                                and acquisitions. Our team provides support
                                to companies and individuals with shareholder 
                                disputes, marital dissolution, and litigation
                                support and testimony.
                </p>
              </div>
            </div>
            <div id="services4" className='serviceParagraph' >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div class="servicesText">
                <h3>Tax Services</h3>
                <p>We help you plan carefully and
                   take advantage of all deductions,
                    credits, and strategies as the tax law allows.
                    It's easy, just drop upload your tax documents
                     to our secure file portal.
                </p>
              </div>
            </div>      
            <HomeLowerSection />  
                                            
          </div>                   
        </div>    
    </div>
  );
}

