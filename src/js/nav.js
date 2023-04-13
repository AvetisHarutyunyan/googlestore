"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector(".nav_icon_search");
    const searchInput = document.querySelector(".search_input");

    searchBtn.addEventListener("click", () => {
        searchInput.classList.add("search_active");

        document.addEventListener("mouseup", e => {
            if (e.target !== searchBtn && e.target !== searchInput) {
                searchInput.classList.remove("search_active");
            }
        });
    });

    const querieBtn = document.querySelector(".nav_icon_querie");
    const querieText = document.querySelector(".querie");

    querieBtn.addEventListener("click", () => {
        querieText.classList.add("q_text_active");

        document.addEventListener("mouseup", e => {
            if (e.target !== querieText) {
                querieText.classList.remove("q_text_active");
            }
        });
    });

    querieText.addEventListener("mouseleave", function () {
        this.classList.remove("q_text_active");
    });

    const cartBtn = document.querySelector(".nav_icon_cart");
    const cartNav = document.querySelector(".cart_navside");
    const cartText = document.querySelector(".cart_title");

    cartBtn.addEventListener("click", () => {
        cartNav.classList.add("cart_nav_active");

        document.addEventListener("mouseup", e => {
            if (e.target !== cartNav && e.target !== cartText) {
                cartNav.classList.remove("cart_nav_active");
            }
        });
    });

    const signInBtn = document.querySelector(".nav_icon_signin");
    const signResult = document.querySelector(".signin");

    signInBtn.addEventListener("click", () => {
        signResult.classList.add("signInUp");

        document.addEventListener("mouseup", e => {
            if (e.target !== signResult && e.target !== signInBtn) {
                signResult.classList.remove("signInUp");
            }
        });
    });

    const mobileNav = document.querySelector(".menu_navside");
    const burger = document.querySelector(".burger");

    function menuOpen() {
        if (!this.classList.contains("close")) {
            this.classList.add("close");
            mobileNav.classList.add("menuNav_active");
        } else {
            this.classList.remove("close");
            mobileNav.classList.remove("menuNav_active");
        }
    }

    burger.addEventListener("click", menuOpen);
});