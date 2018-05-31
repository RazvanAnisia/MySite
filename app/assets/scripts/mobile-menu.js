var hamburger = document.querySelector(".hamburger-menu");
var mobile = document.querySelector(".site-header__mobile");
hamburger.addEventListener("click", function(){
	mobile.classList.toggle("show");
	console.log(mobile);
})

//fade in scroll

window.onscroll = function() {fadeFunction()};

function fadeFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("this").className = "fade-in";
    } else {
        document.getElementById("this").className = "";
    }
}

