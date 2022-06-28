import "./css/Accounting.css"
import accounting from "./images/Accounting_Service.jpg"
import { enterpricesCounter } from "../functions/functions"
import { useEffect } from "react"
import { firstParagraph } from "../textVariables/accountingTextVariables"
import { secondParagraph } from "../textVariables/accountingTextVariables"
import { thirdParagraph } from "../textVariables/accountingTextVariables"
import { Footer } from "./footerGeneral" 

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
                    <p id="accountingThirdParagraph" class="accountingParagraphs">&nbsp;&nbsp;{ thirdParagraph }</p>
                </div>
                <div id="documentsRequired">
                    <div class="documentsList">
                        <hr class="listLine" />
                        <h2 class="documentsListTitle">Monthly bases accounting</h2>
                        <ol class="documentsNeeded">
                            <li>Company's bank account statement for the previous month</li>
                            <li>All sales invoices and receipts from previous month (in case 
                                you are using our online accounting system, then they are available 
                                to us automatically)</li>
                            <li>If some business transactions are not covered with sales or purchase
                                invoices, then please provide other supporting documents (contracts etc.)</li>
                            <li>Purchase and sales contracts of real estate (if there are any)</li>
                            <li>Purchase and sales contracts of shares of other companies (if there are any)</li>
                        </ol>
                    </div>
                    <div class="documentsList">
                    <hr class="listLine" />
                        <h2 class="documentsListTitle">Yearly bases accounting</h2>
                        <ol class="documentsNeeded">
                            <li>Company bank account statement for full fiscal year</li>
                            <li>All purchase invoices and receipts for full fiscal year</li>
                            <li>All sales invoices and receipts for full fiscal year</li>
                            <li>If some business transactions are not covered with sales or
                                 purchase invoices then please provide other supporting documents 
                                 (contracts etc.)</li>
                            <li>Purcase and sales contracts of real estate (if there are any)</li>
                            <li>Purchase and sales contracts of shares of other companies (if there are any)</li>
                            <li>Company securities account statement for full period (if company has one)</li>
                            <li>If company has subsidiaries with ownership 50% or more then the subsidiary company 
                                annual report must be provided.</li>
                        </ol>
                    </div>
                </div>
                <Footer />               
           </div>
}