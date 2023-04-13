//Header Scroll color change
let header = document.querySelector('header');
//element.addEventListener(event, function, useCapture);
//scroll is event and function is called . ((element.classList))
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow,window.scrollY > 0');
});
//Menu and navbar are given variables
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//a close button in place of menu button and the list of navigation links appear
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//Remove Menu on Scroll 
window.onscroll = () => {
       menu.classList.remove('bx-x');
       navbar.classList.remove('active');
}