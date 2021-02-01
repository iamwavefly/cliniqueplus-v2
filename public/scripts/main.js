// DOM
const leftToggle = document.querySelector("#left_toggle")
const cola = document.querySelector("#cola")
const navLink = document.querySelectorAll("#nav_link")
let btnContent = document.querySelector("#btn__content") 
let logoContent = document.querySelector("#logo__content") 
let primaryBtn = document.querySelector("#primary_btn") 
let brandLogo = document.querySelector("#brand_logo") 
const navbar = document.querySelectorAll("#navbar") 
const navbarList = document.querySelectorAll("#nav_list") 
const dropNav = document.querySelectorAll("#drop__nav") 
const dropArr = document.querySelectorAll("#drop__arr") 
const snippetDrop = document.querySelector("#user__snippet__arr") 
const userSnippetPanel = document.querySelector("#user__snippet__panel") 
// Functions
const colaFunc = () => {
    navLink.forEach(link => {
        link.classList.toggle("nav_link-close")
        leftToggle.classList.toggle("left_panel-close")
        primaryBtn.classList.toggle("primary-red")
        btnContent.classList.toggle("primary-btn-close")
        logoContent.classList.toggle("display__close")
        brandLogo.classList.toggle("logo-red")
    });
}
const colaHoverFunc = () => {
    if(leftToggle.classList.contains("left_panel-close")){
        navLink.forEach(link => {
            link.classList.toggle("nav_link-close")
            leftToggle.classList.toggle("left_panel-close")
            primaryBtn.classList.toggle("primary-red")
            btnContent.classList.toggle("primary-btn-close")
            logoContent.classList.toggle("display__close")
            brandLogo.classList.toggle("logo-red")
        });
        dropNav.classList.toggle("display__close")
    }
}
dropNav.forEach(drop => {
    drop.classList.add("display__close")
})
const snippetDropFunc = (e) => {
    userSnippetPanel.classList.add("snippet__panel-red")
}
const bodyFunc = (e) => {
    userSnippetPanel.classList.contains("snippet__panel-red") && userSnippetPanel.classList.remove("snippet__panel-red")
}
// Events
cola.addEventListener("click", colaFunc)
leftToggle.addEventListener("mouseenter", colaHoverFunc)
snippetDrop.addEventListener("mouseenter", snippetDropFunc)
document.querySelector("body").addEventListener("click", bodyFunc)

// --------------------------------------------
// Beware!!! OOP
// --------------------------------------------
navbarList.forEach((nav, index) => {
    nav.addEventListener("click", (e)=> {
        const ul = nav.nextElementSibling
        if(ul.classList.contains("drop__nav")){
            ul.classList.toggle("drop__nav-red")
            dropArr[index].classList.toggle("drop__arr-red")
            // 
        }
    })
})


