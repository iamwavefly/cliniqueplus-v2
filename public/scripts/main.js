const navbar = document.getElementById("navbar");
const leftControl = document.querySelector("#left_btn")
const rightControl = document.querySelector("#right_btn")
const testimonySlider = document.querySelector(".testimony_slider")
window.onscroll = function() {myFunction()};
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

new WOW().init();

wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();


let pos = 0

leftControl.addEventListener("click", function() {
  if(pos > 0){
    pos -= 400
    console.log(pos);
    testimonySlider.style.right = `${pos}px`
  }
})
rightControl.addEventListener("click", function() {
  if(pos <= 400) {
    pos += 400
    testimonySlider.style.right = `${pos}px`
    console.log(pos);
  }
})