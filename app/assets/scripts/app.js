// var mobileMenu = require("./modules/mobile-menu")
import Mobile from "./modules/mobile-menu"
import RevealOnScroll from "./modules/RevealOnScroll"
// var revealOnScroll = new RevealOnScroll();
import $ from "jquery";


new RevealOnScroll($(".about__bio"),"70%");
new RevealOnScroll($(".about__skills"),"60%");
new RevealOnScroll($(".projects"),"60%");


//fade in scroll

// window.onscroll = function() {fadeFunction()};

// function fadeFunction() {
//     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//         document.getElementById("this").className = "fade-in";
//     } else {
//         document.getElementById("this").className = "";
//     }
// }

