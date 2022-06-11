import './css/Home.css';
import writting_pen from './images/writting_pen.jpg';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';




export const Home = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
            if(window.pageYOffset > document.getElementById('services3').offsetTop){
            document.getElementById('services4').style.opacity = 1;
            document.getElementById('services4').style.transform = "translateY(0)";
            document.getElementById('services3').style.opacity = 1;
            document.getElementById('services3').style.transform = "translateY(0)";
            }
        }
      )
   }
  )

  return (
    <div className="Home">        
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
            <div id="services1" >
              <div class="fontIcon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="servicesText">
                <h3>Our Business</h3>
                <p id="header1">blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                </p>
              </div>
            </div>
            <div id="services2" >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="servicesText">
                <h3>Our Business</h3>
                <p>blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                </p>
              </div>
            </div>
            <div id="services3" >
              <div class="fontIcon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="servicesText">
                <h3>Our Business</h3>
                <p id="header1">blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                </p>
              </div>
            </div>
            <div id="services4" >
              <div class="fontIcon">                
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="servicesText">
                <h3>Our Business</h3>
                <p>blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                        blablablabalabkajajajjajajjj
                        ssssssssssssssssssjjjjjjjj
                </p>
              </div>
            </div>                        
          </div>          
        </div>
    </div>
  );
}

