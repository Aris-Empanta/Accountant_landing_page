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
  const home = document.getElementById("homeSection")
  const aboutUs = document.getElementById("aboutUsSection")
  const insurance = document.getElementById("insuranceSection")
  const contact = document.getElementById("contactSection")

  if(menu.style.display === 'flex'){
    document.getElementById("barsContainer").style.backgroundColor = "transparent"
    document.getElementById("barsContainer").style.border = "none"
    document.getElementById("barsContainer").style.boxShadow = "none"
    setTimeout(() => {
      home.style.opacity = 1
    },200)
    setTimeout(() => {
      aboutUs.style.opacity = 1
    },400)
    setTimeout(() => {
      insurance.style.opacity = 1
    },600)
    setTimeout(() => {
      contact.style.opacity = 1
    },800)
  }else if(window.pageYOffset <= 370 && menu.style.display !== 'flex'){
    document.getElementById("barsContainer").style.backgroundColor = "transparent"
    document.getElementById("barsContainer").style.boxShadow = "none"
    document.getElementById("barsContainer").style.border = "none"
    document.getElementById("barsContainer").style.opacity = 1
    home.style.opacity = 0
    aboutUs.style.opacity = 0
    insurance.style.opacity = 0
    contact.style.opacity = 0
  }else if(window.pageYOffset > 370 && menu.style.display !== 'flex'){
    document.getElementById("barsContainer").style.backgroundColor = "#005A9C"
    document.getElementById("barsContainer").style.boxShadow = "0 2px 3px 0 rgba(0,0,0,.2)"
    document.getElementById("barsContainer").style.border = "1px solid black"
    document.getElementById("barsContainer").style.opacity = 0.7
    home.style.opacity = 0
    aboutUs.style.opacity = 0
    insurance.style.opacity = 0
    contact.style.opacity = 0
  }

}