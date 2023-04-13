"use strict";

// For you or for them \ section
function scrollCarousel() {
    const carousel = document.querySelector(".fyft__items");
    let isDragStart = false, prevPageX, prevScrollLeft;

    function dragStart(e) {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    function dragging(e) {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    function dragStop() {
        isDragStart = false;
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
}

scrollCarousel();
// For you or for them \ section \ END

// Holiday Season \ section
function learnMore() {
    const learnMoreBtn = document.querySelector(".learn__more a");
    const moreText = document.querySelector(".more__text");

    function openText() {
        if (!moreText.classList.contains("show__text")) {
            moreText.classList.add("show__text");
            learnMoreBtn.textContent = "See less";
        } else {
            moreText.classList.remove("show__text");
            learnMoreBtn.textContent = "Learn more";
        }
    }

    learnMoreBtn.addEventListener("click", openText);
}
learnMore();
// Holiday Season \ section \ END

// information \ section
function emailInput() {
    const eInput = document.querySelector(".input__email");
    const eBtn = document.querySelector(".info__email_address a");

    function showInput() {
        if(!eInput.classList.contains("show_input")) {
            eInput.classList.add("show_input");
            eBtn.textContent = "enter email address";
        } else {
            eInput.classList.remove("show_input");
            eBtn.textContent = "or enter email address";
        }
    }

    eBtn.addEventListener("click", showInput);
}
emailInput();
// information \ section \ END