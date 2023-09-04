'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-links]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]")

menuToggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for(let i=0; i < navbarLinks.length; i++){
navbarLinks[i].addEventListener("click", function() {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
});
}

/**
 * HEADER STICKY & BACK TO TOP
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
    searchBoxElems[i].addEventListener("click", function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    }); 
}

/**Move Cycle On  Scroll */

// const deliveryBoy = document.querySelector("[data-delivery-boy]");

// let deliveryBoyMove = -80;
// let lastScrollPos = 0;

// window.addEventListener("scroll", function() {
//     let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

//     if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250){
//         let activeScrollPos = window.scrollY;

//         if(lastScrollPos < activeScrollPos) {
//             deliveryBoyMove++;
//         } 
//         else {
//             deliveryBoyMove--;
//         }

//         lastScrollPos = activeScrollPos;

//         deliveryBoy.style.transform = 'translateX(${deliveryBoyMove}px)';
//     }

// });


/**
 * Back to top
 */




