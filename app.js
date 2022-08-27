const burger = document.querySelector(".burger");
// const responsiveNav =document.querySelector(".responsive-nav")
const navLinks = document.querySelector("ul")


burger.addEventListener("click", showNav);

function showNav(){
    navLinks.parentElement.classList.toggle("responsive-nav-active");
    navLinks.parentElement.classList.toggle("responsive-nav");
    // burger.style.right = "12rem"
    
    console.log( navLinks.parentElement.classList)
}