// DOM
let btnContent = document.querySelector("#btn__content") 
let logoContent = document.querySelector("#logo__content") 
let primaryBtn = document.querySelector("#primary_btn") 
let brandLogo = document.querySelector("#brand_logo") 
const leftToggle = document.querySelector("#left_toggle")
const cola = document.querySelector("#cola")
const navLink = document.querySelectorAll("#nav_link")
const navbar = document.querySelectorAll("#navbar") 
const navbarList = document.querySelectorAll("#nav_list") 
const dropNav = document.querySelectorAll("#drop__nav") 
const dropArr = document.querySelectorAll("#drop__arr") 
const snippetDrop = document.querySelectorAll("#user__snippet__arr") 
const userSnippetPanel = document.querySelector("#user__snippet__panel") 
const hamburger = document.querySelector("#hamburger") 
const MsgCont = document.querySelectorAll("#MsgCont") 
const msgContent = document.querySelectorAll("#msgContent") 
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
    userSnippetPanel.classList.toggle("snippet__panel-red")
    setTimeout(() => {
        userSnippetPanel.classList.remove("snippet__panel-red")
    }, 5000);
}
const handleHamburger = (e) => {
    hamburger.getAttribute("src") == "./assets/icons/hamburger.svg" ? hamburger.setAttribute("src", "./assets/icons/cola_open.svg") : hamburger.setAttribute("src", "./assets/icons/hamburger.svg")
    leftToggle.classList.toggle("mobile__menu-display")
}
// Events
cola.addEventListener("click", colaFunc)
leftToggle.addEventListener("mouseenter", colaHoverFunc)
hamburger.addEventListener("click", handleHamburger)

// --------------------------------------------
// --------------------------------------------
// LOOP
snippetDrop.forEach(drop => {
    drop.addEventListener("click", snippetDropFunc)
})
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


// --------------------------------------------------------------
// --------------------------[LEV1]------------------------------
// --------------------------------------------------------------
// const handleClick = (e) =>{
//     msgContent.forEach(msg => {
//         // msg.classList.toggle("show__msg")

//     })
// }
const msgShower = (msg, index) => {
    console.log(index);
    msg.addEventListener("click", () => {
        msgContent[index].classList.toggle("show__msg")
    })
}
const showBox = (message) => {
    message.forEach(msgShower)
}

showBox(MsgCont)