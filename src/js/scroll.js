"use strict";

window.addEventListener("scroll", () => {
    const headerNav = document.querySelector(".header_menu_navbar");
    headerNav.classList.toggle("nav_scroll_active", window.scrollY > 0);
});