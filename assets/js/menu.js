const openButton = document.querySelector(".menu-open");
const closeButton = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");


const open = () => {
    menu.style.display = "flex";
    menu.style.animationName = "show"
    sidebar.style.animationName = "slide-left"
}
const close = () => {
    sidebar.style.animationName = "slide-right"
    menu.style.animationName = "hide"
    setTimeout(()=>{
        menu.style.display = "none";
    },500)
}
openButton.addEventListener("click", open);
closeButton.addEventListener("click", close);