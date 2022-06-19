import { useEffect } from 'react';
import './css/HomeLowerSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { reliabilityPercentageCounter } from '../functions/functions';
import { validityPercentageCounter } from '../functions/functions';
import { cooperationPercentageCounter } from '../functions/functions';


export const HomeLowerSection = () => {
    
    
    useEffect(() => {

      let reliabilityProgressCircle = document.getElementById("reliabilityProgressCircle")      
      let validityProgressCircle = document.getElementById("validityProgressCircle") 
      let cooperationProgressCircle = document.getElementById("cooperationProgressCircle")      

      window.addEventListener("scroll", () =>{
        if(window.pageYOffset > document.getElementById("weGuarantee").offsetTop + 170){
            reliabilityPercentageCounter(reliabilityProgressCircle)
            setTimeout(() => validityPercentageCounter(validityProgressCircle), 1000)
            setTimeout(() => cooperationPercentageCounter(cooperationProgressCircle), 2000)          
          }         
      })
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
        </div>
       )
     }