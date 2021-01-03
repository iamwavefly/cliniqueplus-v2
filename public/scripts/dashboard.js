const sideNav = document.querySelectorAll("#sidebar_nav")
const toast = document.querySelector("#toast")


setTimeout(() => {
    toast.classList.add("toast-show") 
    
}, 8000);
setTimeout(() => {
    toast.classList.add("toast-anim") 
}, 16000);