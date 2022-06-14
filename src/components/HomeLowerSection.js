import { useEffect } from 'react';
import './css/HomeLowerSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward} from '@fortawesome/free-solid-svg-icons';



export const HomeLowerSection = () => {
    
    
    useEffect(() => {
      let progressCircle = document.getElementById("progress")
      let percent = document.querySelector(".percent")
      let i = 0
      let currentScroll = window.pageYOffset
      let guaranteePosition = document.getElementById("weGuarantee").offsetTop

      window.addEventListener("scroll", () =>{
        if(window.pageYOffset > 700){
          progressCircle.style.strokeDashoffset = 0;
          const percentInterval = setInterval( () => {              
              if(i<=100){
                percent.textContent = i + " %"
                i++
              }else{
                clearInterval(percentInterval)
              }
            }, 75)     
          }
      })
    })

    

    return(
        <div className='HomeLowerSection'>
            <div id="weGuarantee">
              <h1 id="guaranteeTitle">We Guarantee</h1> 
              <div id="reliability">
                <svg class="circleWrapper" width="300" height="300">
                  <circle cx="150" cy="150" r="110"  class="track"></circle>
                  <circle cx="150" cy="150" r="110"   id="progress" class="progress"></circle>                 
                </svg>
                <div class="guarantees">
                  <h3 class="guaranteeIcon"><FontAwesomeIcon icon={faAward} /></h3>
                  <h3 class="guaranteeText">RELIABILITY</h3>                
                  <h3 class="percent">0 %</h3> 
                </div>                              
              </div> 
            </div>
        </div>
    )
}