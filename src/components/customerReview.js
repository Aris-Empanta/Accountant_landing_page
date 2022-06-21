import React from 'react';
import "./css/CustomerReview.css"
import io from "./images/io_2.jpg"




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
            
            if(windowHeight >  revealElementsDistance ){
              revealElements[i].classList.add("rotateOnX")
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