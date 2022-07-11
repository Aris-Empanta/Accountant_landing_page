import "./css/TaxServices.css"
import taxes from "./images/Taxes.jpg"
import { useEffect } from "react"
import { titleBounch } from "../functions/functions"
import { ContactButton } from "./ContactButton"
import { Footer } from "./footerGeneral"
import { firstTaxingParagraph } from "../textVariables/taxingTextVariables"
import { secondTaxingParagraph } from "../textVariables/taxingTextVariables"

const TaxServices = () => {
    
    useEffect( () => {

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
        //The function which makes the title "Tax Services" appear with bounce
        titleBounch()          
        }
    )

    return <div>
                <img src= { taxes } id="taxImage" ></img>  
                <div id="threeDHeaderSpace">
                    <h1 id="taxHeader">Tax Services</h1>
                </div>
                <div id="taxServicesParagraphs">
                    <h1 id="taxTitle">GET INFORMED / SAVE TAXES</h1>
                    <p id="taxFirstParagraph" class="taxParagraphs">&nbsp;&nbsp;{ firstTaxingParagraph } </p>
                    <p id="taxSecondParagraph" class="taxParagraphs">&nbsp;&nbsp;{ secondTaxingParagraph }</p>
                    <div id="taxListContainer">
                        <h2 class="documentsListTitle">Our tax related services for businesses and individuals include:</h2>    
                        <ul class="taxServicesList">
                            <li>Tax returns for individuals</li>
                            <li>Business tax preparation</li>
                            <li>Estate tax returns</li>
                            <li>Non-profit tax preparation services</li>
                            <li>Expatriate tax preparation and FBAR filing</li>
                            <li>Quicker tax refunds with E-file</li>
                        </ul>
                    </div>
                </div>
                <ContactButton />
                <Footer />
           </div>
}

export default TaxServices