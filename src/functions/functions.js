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
    setTimeout(() => {
      home.style.opacity = 1
    },200)
    setTimeout(() => {
      aboutUs.style.opacity = 1
    },350)
    setTimeout(() => {
      insurance.style.opacity = 1
    },500)
    setTimeout(() => {
      contact.style.opacity = 1
    },650)
  }else if(menu.style.display !== 'flex'){
    if(window.pageYOffset > 370){
      document.getElementById("barsContainer").style.backgroundColor = "silver"
    }
    
    home.style.opacity = 0
    aboutUs.style.opacity = 0
    insurance.style.opacity = 0
    contact.style.opacity = 0
  }
}