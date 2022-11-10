const buttons = document.querySelectorAll("[data-carousel-button]")
// using adata attribute is easer than class attribute
buttons.forEach(button => {
  //looping thorough the button to return an eventlistener  
  button.addEventListener("click", () => {
    //if the data attributr of the button is "next" then give like an id of 1
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")//acccess for the closest parent 
      .querySelector("[data-slides]")//to select SLides

    const activeSlide = slides.querySelector("[data-active]")// get the first slide 
    let newIndex = [...slides.children].indexOf(activeSlide) + offset//to get index of the first slide put the slides in an array and check the index property the offset it
    if (newIndex < 0) newIndex = slides.children.length - 1//going past the first image ? then go to the last 
    if (newIndex >= slides.children.length) newIndex = 0//going past the last image ? then go to the first 

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
