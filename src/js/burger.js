const menu = document.querySelector(".header__menu-burger");
const menuItems = document.querySelectorAll(".header__menu-burger-item");
const hamburger = document.querySelector(".header__burger-btn");
const hamburgerClose = document.querySelector(".header__close-burger-btn");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
    } else {
        menu.classList.add("show-menu");
    }
}

hamburger.addEventListener("click", toggleMenu);
hamburgerClose.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)