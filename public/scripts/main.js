// DOM
const btnContent = document.querySelector("#btn__content") 
const logoContent = document.querySelector("#logo__content") 
const primaryBtn = document.querySelector("#primary_btn") 
const brandLogo = document.querySelector("#brand_logo") 
const leftToggle = document.querySelector("#left_toggle")
const cola = document.querySelector("#cola")
const navLink = document.querySelectorAll("#nav_link")
const navbar = document.querySelectorAll("#navbar") 
const navbarList = document.querySelectorAll("#nav_list") 
const dropNav = document.querySelectorAll("#drop__nav") 
const dropArr = document.querySelectorAll("#drop__arr") 
// const snippetDrop = document.querySelectorAll("#user__snippet__arr") 
// const userSnippetPanel = document.querySelector("#user__snippet__panel") 
const hamburger = document.querySelector("#hamburger") 
const MsgCont = document.querySelectorAll("#MsgCont") 
const msgContent = document.querySelectorAll("#msgContent") 
const themeColor = document.querySelector("#theme__color") 
const themeText = document.querySelector("#theme__text") 
// Functions

dropNav.forEach(drop => {
    drop.classList.add("display__close")
})
// const snippetDropFunc = (e) => {
//     userSnippetPanel.classList.toggle("snippet__panel-red")
//     setTimeout(() => {
//         userSnippetPanel.classList.remove("snippet__panel-red")
//     }, 5000);
// }
const handleHamburger = (e) => {
    hamburger.getAttribute("src") == "./assets/icons/hamburger.svg" ? hamburger.setAttribute("src", "./assets/icons/cola_open.svg") : hamburger.setAttribute("src", "./assets/icons/hamburger.svg")
    leftToggle.classList.toggle("mobile__menu-display")
}
const menuFunc = (e) => {
    leftToggle.classList.toggle("left__panel-close")
    logoContent.classList.toggle("display__close")
    btnContent.classList.toggle("display__close")
    primaryBtn.classList.toggle("primary-close")
    navLink.forEach(nav => {
        nav.classList.toggle("nav_link-close")
    })
}
// Events
cola.addEventListener("click", menuFunc)
// leftToggle.addEventListener("mouseenter", colaHoverFunc)
hamburger.addEventListener("click", handleHamburger)
// --------------------------------------------
// --------------------------------------------
// LOOP
// snippetDrop.forEach(drop => {
//     drop.addEventListener("click", snippetDropFunc)
// })
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

themeColor.addEventListener("click", ()=> {
    leftToggle.classList.toggle("night__theme")

    if(themeText.innerHTML === "Night Mode"){
        themeText.innerHTML = "Light Mode"
    }  else {
        themeText.innerHTML = "Night Mode"
    }
})

showBox(MsgCont)