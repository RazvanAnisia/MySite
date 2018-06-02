
	var hamburger = document.querySelector(".hamburger-menu");
	var mobile = document.querySelector(".site-header__mobile");
	hamburger.addEventListener("click", function(){
		mobile.classList.toggle("show");
		console.log(mobile);
	})



