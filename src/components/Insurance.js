import { useEffect } from "react"
import "./css/Insurance.css"
import insuranceSection from "./images/insuranceSection.jpg"
import { insuranceUp } from "../functions/insuranceFunctions"
import { firstInsuranceParagraph } from "../textVariables/insuranceTextVariables"
import { secondInsuranceParagraph } from "../textVariables/insuranceTextVariables"

export const Insurance = () => {

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
        window.addEventListener("scroll", insuranceUp)
    })

    return <div>
                <img id="insuranceSectionPhoto" src= { insuranceSection } />
                <h1 id="insuranceHeader">Insurance</h1>
                <div id="insuranceWrapper">
                    <h1 id="insuranceTitle">Your insurance - Our duties</h1>
                    <p className="insuranceParagraphs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ firstInsuranceParagraph }</p>
                    <p id="secondinsuranceParagraph" className="insuranceParagraphs">{ secondInsuranceParagraph }</p>
                    <div id="insuranceTypes">
                        <h1 id="packageTitle">Our Packages</h1>
                        <div class="packageGrid" id="firstPackage">
                            <div id="carInsurance" className="packageCircle"></div>
                            <p className="packageDescription">Car insurance</p>    
                        </div>
                        <div class="packageGrid" id="secondPackage">
                            <div id="healthInsurance" className="packageCircle"></div>
                            <p className="packageDescription">Health insurance</p>   
                        </div>
                        <div class="packageGrid" id="thirdPackage">
                            <div id="retirementInsurance" className="packageCircle"></div>
                            <p className="packageDescription">Retirement plan</p>   
                        </div>
                        <div class="packageGrid" id="fourthPackage">
                            <div id="lifeInsurance" className="packageCircle"></div>
                            <p className="packageDescription">Life insurance</p>   
                        </div>
                    </div>
                </div>
           </div>
}