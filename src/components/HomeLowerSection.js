import { useEffect } from 'react';
import './css/HomeLowerSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { reliabilityPercentageCounter } from '../functions/functions';
import { validityPercentageCounter } from '../functions/functions';
import { cooperationPercentageCounter } from '../functions/functions';
import { HomeFooterSection} from './HomeFooterSection.js';

//This is the lower Home section component. It uses one imported component named HomeFooterSection.
export const HomeLowerSection = () => {
    
  /*With below listener, once we scroll down to the 3 circles position
  named reliability, validity and cooperation, the circles load full to 100%.*/
    useEffect(() => {      

      window.addEventListener("scroll", () =>{

        const windowHeight = window.innerHeight;
        const circlesLoadPosition = windowHeight - 200;
        const reliabilityTopDistance = document.getElementById("reliabilityProgressCircle").getBoundingClientRect().top
        const reliabilityCircle = document.getElementById("reliabilityProgressCircle");      
        const validityCircle = document.getElementById("validityProgressCircle"); 
        const cooperationCircle = document.getElementById("cooperationProgressCircle");

          if(circlesLoadPosition > reliabilityTopDistance){
            reliabilityPercentageCounter(reliabilityCircle)
            setTimeout(() => validityPercentageCounter(validityCircle), 500)
            setTimeout(() => cooperationPercentageCounter(cooperationCircle), 1000) 
          }      
        }
      )
     }
    )


   return(
        <div class='HomeLowerSection'>
            <div id="weGuarantee">
              <h1 id="guaranteeTitle">We Guarantee</h1> 
              <div id="reliability">
                <svg class="circleWrapper" width="300" height="300">
                  <circle cx="150" cy="150" r="120"  class="track"></circle>
                  <circle cx="150" cy="150" r="120"   id="reliabilityProgressCircle" class="progressCircle"></circle>                 
                </svg>
                <div class="guarantees">
                  <h3 class="guaranteeIcon"><FontAwesomeIcon icon={faAward} /></h3>
                  <h3 class="guaranteeText">RELIABILITY</h3>                
                  <h3 id="reliabilityPercentage" class="percent">0 %</h3> 
                </div>                              
              </div> 
              <div id="validity">
                <svg class="circleWrapper" width="300" height="300">
                  <circle cx="150" cy="150" r="120"  class="track"></circle>
                  <circle cx="150" cy="150" r="120"   id="validityProgressCircle" class="progressCircle"></circle>                 
                </svg>
                <div class="guarantees">
                  <h3 class="guaranteeIcon"><FontAwesomeIcon icon={faBookOpen} /></h3>
                  <h3 class="guaranteeText">VALIDITY</h3>                
                  <h3 id="validityPercentage" class="percent">0 %</h3> 
                </div>                              
              </div> 
              <div id="cooperation">
                <svg class="circleWrapper" width="300" height="300">
                  <circle cx="150" cy="150" r="120"  class="track"></circle>
                  <circle cx="150" cy="150" r="120"   id="cooperationProgressCircle" class="progressCircle"></circle>                 
                </svg>
                <div class="guarantees">
                  <h3 class="guaranteeIcon"><FontAwesomeIcon icon={faUserGroup} /></h3>
                  <h3 class="guaranteeText">COOPERATION</h3>                
                  <h3 id="cooperationPercentage" class="percent">0 %</h3> 
                </div>                              
              </div>             
            </div>
            <HomeFooterSection />
        </div>
       )
     }