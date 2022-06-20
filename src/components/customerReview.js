import React from 'react';
import "./css/CustomerReview.css"
import io from "./images/io_2.jpg"




class CustomerReview extends React.Component {

    constructor(props) {
      super(props);
    }    

    componentDidMount(){
      const gridTopDistance = document.getElementById("linksGrid").offsetTop
      const portraitLinks = document.querySelectorAll(".portraitLinks")      

      document.addEventListener("scroll", () => {
        
          if(window.pageYOffset > gridTopDistance + 50 ){
            for(let i=0; i < portraitLinks.length; i++ ){ 
              portraitLinks[i].classList.add("rotateOnX")
              portraitLinks[i].style.transform = "rotateX(0)" 
            }   
          }          
        }
      )
    } 

    render(){
        return   <div class="customerReview" id="linksGrid">              
                    <h1 id="linksTitle">This is the title</h1>
                    <div id="firstLink" className="portraitLinks"><img id="io" src={io}></img></div>
                    <div id="secondLink" className="portraitLinks"><img id="io" src={io}></img></div>
                    <div id="thirdLink" className="portraitLinks"><img id="io" src={io}></img></div>                
                 </div>  
                            
        }
}

export { CustomerReview } 