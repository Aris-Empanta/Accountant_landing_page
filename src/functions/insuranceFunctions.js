//Below function will make the gold circle in insurance component to appear and come up gradually.
export const insuranceUp = () => {         
    const firstCircle = document.getElementById("firstPackage")
    const secondCircle = document.getElementById("secondPackage")    
    const thirdCircle = document.getElementById("thirdPackage")
    const fourthCircle = document.getElementById("fourthPackage")            
    const positionToAppear = window.innerHeight - 50
    const firstDistanceTop = firstCircle.getBoundingClientRect().top
    const secondDistanceTop = secondCircle.getBoundingClientRect().top
    const thirdDistanceTop = thirdCircle.getBoundingClientRect().top
    const fourthDistanceTop = fourthCircle.getBoundingClientRect().top
    const minimumMobileScreens =  window.matchMedia("(max-width: 348px)")
    const mobileScreens =  window.matchMedia("(min-width: 349px) and (max-width: 391px) ")
    const mediumScreens =  window.matchMedia("(min-width: 392px) and (max-width: 740px)")
    
    /*Below we make a separate function for each of the 4 gold circles to come up */
    const firstCircleUp = () => {
        if( positionToAppear >= firstDistanceTop){
            firstCircle.style.opacity = 1;
            firstCircle.style.transform = "translateY(0)";
          }
    }
    
    const secondCircleUp = () => {
        if( positionToAppear >= secondDistanceTop){
            secondCircle.style.opacity = 1;
            secondCircle.style.transform = "translateY(0)";
          }
    }

    const thirdCircleUp = () => {
        if( positionToAppear >= thirdDistanceTop){
            thirdCircle.style.opacity = 1;
            thirdCircle.style.transform = "translateY(0)";
          }
    }
    
    const fourthCircleUp = () => {
        if( positionToAppear >= fourthDistanceTop){
            fourthCircle.style.opacity = 1;
            fourthCircle.style.transform = "translateY(0)";
          }
    }   
    
    /*Each circle will come up one by one depending on the flexbox shape due to screen size*/
    if (minimumMobileScreens.matches) {

        firstCircleUp();
        secondCircleUp();
        thirdCircleUp();
        fourthCircleUp();   

    } else if (mobileScreens.matches) {

        firstCircleUp();
        setTimeout( secondCircleUp, 250);
        thirdCircleUp();
        fourthCircleUp();

    } else if (mediumScreens.matches) {

        firstCircleUp();
        setTimeout( secondCircleUp, 250);
        thirdCircleUp();
        setTimeout( fourthCircleUp, 250);
        
    } else {

        firstCircleUp();
        setTimeout( secondCircleUp, 250);
        setTimeout( thirdCircleUp, 500);
        setTimeout( fourthCircleUp, 750);
        
    }
   
}