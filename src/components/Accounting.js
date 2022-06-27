import "./css/Accounting.css"
import accounting from "./images/Accounting_Service.jpg"
import { enterpricesCounter } from "../functions/functions"
import { useEffect } from "react"
import { firstParagraph } from "../textVariables/accountingTextVariables"
import { secondParagraph } from "../textVariables/accountingTextVariables"

export const Accounting = () => {

    useEffect(() => {
        
        const navbarContainer = document.getElementById("barsContainer")
        const menu = document.getElementById("menu")

        //With below listener, once we scroll below the height of the images, the navbare gets a background color.
        window.addEventListener("scroll", () =>{
            if(window.pageYOffset > 500 && menu.style.display !== "flex"){
                navbarContainer.style.backgroundColor = "rgba(0,90,156,0.7)"
                navbarContainer.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)"
                navbarContainer.style.border = "1px solid black"
            }else{
                navbarContainer.style.backgroundColor = "transparent"
                navbarContainer.style.boxShadow = "none"
                navbarContainer.style.border = "none"
            }
          }  
        )

        setTimeout(() => {
            enterpricesCounter()
        }, 1000)        
    })

    return <div className="Accounting">
                <img src= { accounting } id="accountingImage" ></img>                    
                <h1 id="enterpricesSentence">
                    <span  id="enterpricesNumber">0</span>
                    &nbsp;&nbsp;
                    <span id="enterpricesWord">ENTERPRICES</span>
                </h1>
                <div id="financialControl">
                    <h1 id="financialControlTitle">FINANCIAL CONTROL - BUSINESS EXPANSION </h1>
                    <p id="accountingFirstParagraph" class="accountingParagraphs">&nbsp;&nbsp;{ firstParagraph }</p>
                    <p id="accountingSecondParagraph" class="accountingParagraphs">&nbsp;&nbsp;{ secondParagraph }</p>
                </div>               
           </div>
}