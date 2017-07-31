let hamburger = document.getElementsByClassName('header__hamburger')[0];
let nav = document.getElementsByClassName('header__menu')[0];

hamburger.addEventListener("click", function () {
    nav.classList.toggle("header__menu--visible");
});
