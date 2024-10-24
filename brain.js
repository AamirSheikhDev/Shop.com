const burgerBtn = document.querySelector('.burger_icon');
const navControl = document.querySelector("nav");

burgerBtn.addEventListener("click",()=>{
    navControl.classList.toggle("nav-btn-control")
})
