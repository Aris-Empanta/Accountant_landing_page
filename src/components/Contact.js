import { useEffect } from "react"
import { Footer } from "./Footer"
import "./css/Contact.css"

const Contact = () => {
   
    useEffect(() => {
        const logo = document.getElementById("navBarLogo")
        //Once load every component, logo should be obvious
        logo.style.opacity = 1
        const fixedNavBar = document.getElementById("fixedNavBar")
        const navbarButton = document.getElementById("navbarButton")
        const menu = document.getElementById("menu")

        navbarButton.addEventListener("click", () => {
            if(menu.style.display === "flex"){
                fixedNavBar.style.backgroundColor = "rgba(0,90,156,0.7)"
                fixedNavBar.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)"
                fixedNavBar.style.border = "1px solid black"
            }else{
                fixedNavBar.style.backgroundColor =  "transparent"
                fixedNavBar.style.boxShadow = "none"
                fixedNavBar.style.border = "none"
            }
        })
        //Preventing default submition to alert the desired message
        const formFlexBox = document.getElementById("formFlexbox")
        
        formFlexBox.addEventListener("submit", (e) => {
            e.preventDefault()
        })
    })

    const alertMessage = () => {
        alert("This accountant office is fictional. This form is only for show, it will not be submited anywhere")
    }
    


    return <div >
                <div id="fixedNavBar"></div>
                <div id="contactFormContainer">
                    <form id="formFlexbox">
                        <p id="formComment">*we promise to respond soon</p>
                        <input type="text" placeholder="Enter your name" id="enterName" className="inputFields"/>
                        <input type="text" placeholder="Enter your email" id="enterEmail" className="inputFields"/>
                        <input type="text" placeholder="Enter your phone" id="enterPhone" className="inputFields"/>
                        <textarea type="text" placeholder="Enter your message" id="enterMessage" rows="13" /> 
                        <button type="submit" id="submitButton" onClick={alertMessage}> Submit</button>
                    </form>
                    <div id="contactDetailsList">
                        <h3 className="contactTitles">OUR OFFICE</h3>
                        <p className="contactParagraphs">18710 Blue Lake Boston</p>
                        <p className="contactParagraphs">Boston US</p>
                        <p className="contactParagraphs">CA 90066</p><br />
                        <h3 className="contactTitles">WORKING HOURS</h3>
                        <p className="contactParagraphs">8AM - 6PM, Mon to Fri</p>
                        <p className="contactParagraphs">0AM - 4PM, Sat</p><br />
                        <h3 className="contactTitles">CONTACT</h3>
                        <p className="contactParagraphs">email: bost_accounts@outlook.com</p>
                        <p className="contactParagraphs">phone: 415-664-7262</p>
                    </div>
                </div>
                <Footer /> 
           </div>
}

export default Contact