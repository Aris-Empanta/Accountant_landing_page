/*With this function, when we click the navbar icon,
we open or close the navigation menu */
export const showMenu = () => {

    const menu = document.getElementById("menu")
    const bars = document.getElementById("bars")
    const xIcon = document.getElementById("xIcon")
    const clickSound = document.getElementById("click")

    if(menu.style.display !== 'flex'){
      xIcon.style.display = 'initial'
      menu.style.display = 'flex'
      menu.style.opacity = 0.8
      bars.style.display = 'none'
      clickSound.play()
    }else {
      bars.style.display = 'initial'
      menu.style.display = 'none'
      xIcon.style.display = 'none'
    
    }
  }

/*Below function makes navbar links appear one by one when 
we open the navbar menu */
export const showLinks = () => {
  const menu = document.getElementById("menu")
  const home = document.getElementById("home")
  const accounting = document.getElementById("accounting")
  const tax = document.getElementById("tax")
  const insurance = document.getElementById("insurance")
  const contact = document.getElementById("contact")
  const barsContainer = document.getElementById("barsContainer")
  const logo = document.getElementById("navBarLogo")

  if(menu.style.display === 'flex'){
    
    barsContainer.style.backgroundColor = "transparent"
    barsContainer.style.border = "none"
    barsContainer.style.boxShadow = "none"
    logo.style.opacity = 0
    setTimeout(() => {
      home.style.opacity = 1
    },200)
    setTimeout(() => {
      accounting.style.opacity = 1
    },400)
    setTimeout(() => {
      tax.style.opacity = 1
    },600)
    setTimeout(() => {
      insurance.style.opacity = 1
    },800)
    setTimeout(() => {
      contact.style.opacity = 1
    },1000)

  }else if(window.pageYOffset <= 370 && menu.style.display !== 'flex'){

    logo.style.opacity = 1
    barsContainer.style.backgroundColor = "transparent"
    barsContainer.style.boxShadow = "none"
    barsContainer.style.border = "none"
    barsContainer.style.opacity = 1
    home.style.opacity = 0
    accounting.style.opacity = 0
    tax.style.opacity = 0
    insurance.style.opacity = 0
    contact.style.opacity = 0

  }else if(window.pageYOffset > 370 && menu.style.display !== 'flex'){

    logo.style.opacity = 1
    barsContainer.style.backgroundColor = "rgba(0,90,156,0.7)"
    barsContainer.style.boxShadow = "0 2px 3px 0 rgba(0,0,0,.2)"
    barsContainer.style.border = "1px solid black"
    home.style.opacity = 0
    accounting.style.opacity = 0
    tax.style.opacity = 0
    insurance.style.opacity = 0
    contact.style.opacity = 0

  }

}

/*Below variables will be used for the percentage counter effect in Home page named:
reliability, validity, cooperation. */
let reliabilityCounter = 0
let validityCounter = 0
let cooperationCounter = 0

/*Below is the function that maximizes the percentage of the circle named reliability
in home page. */
export const reliabilityPercentageCounter = (element) => {

  let percent = document.getElementById("reliabilityPercentage")

  element.style.strokeDashoffset = 0;

  const percentInterval = setInterval( () => {

      if( reliabilityCounter <= 100 ){
        percent.textContent = reliabilityCounter + " %"
        reliabilityCounter ++
      }else {
        clearInterval(percentInterval)
      }

    }, 60)     
  }

/*Below is the function that maximizes the percentage of the circle named validity
in home page. */

  export const validityPercentageCounter = (element) => {

    let percent = document.getElementById("validityPercentage")

    element.style.strokeDashoffset = 0;
  
    const percentInterval = setInterval( () => {              
        if( validityCounter <= 100 ){
          percent.textContent = validityCounter + " %"
          validityCounter ++
        }else{
          clearInterval(percentInterval)
        }
      }, 60)     
    }

/*Below is the function that maximizes the percentage of the circle named cooperation
in home page. */

export const cooperationPercentageCounter = (element) => {

   let percent = document.getElementById("cooperationPercentage")
   element.style.strokeDashoffset = 0;
    
   const percentInterval = setInterval( () => {              
         if( cooperationCounter <= 100 ){
            percent.textContent = cooperationCounter + " %"
            cooperationCounter ++
          }else{
            clearInterval(percentInterval)
          }
        }, 60)     
    }

//The function that makes the enterprices count from 0 to 1500 at accounting component.
export const enterpricesCounter = () => {

      let enterprices = document.getElementById("enterpricesNumber")
      let i=0

      const countEnterPrices = setInterval( () => {              
            if( i <= 300 ){
              enterprices.textContent = i
              i ++
             }else{
               clearInterval(countEnterPrices)
             }
           }, 2)          
    }   

//Below function, will cause the title "Tax Services" animation one TaxServices component loads
export const titleBounch = () => {

      const taxHeader = document.getElementById("taxHeader")

      taxHeader.classList.add("bounceHeader") 
}
       