import $ from "jquery";
import smoothScroll from 'jquery-smooth-scroll';

// var shit = $(".site-header_logo");
// shit.remove();

class HeaderSmoothScroll{
	constructor(){
		this.headerLinks = $(".site-header a");
		this.addSmoothScrolling();
		// this.removeHeaders();
	}
	// removeHeaders(){
	// 	this.headerLinks.remove();
	// };
	addSmoothScrolling(){
		console.log(this.headerLinks);
    this.headerLinks.smoothScroll();
    }
   
  	}

// $('site_header_links').on('click', function() {
//   $.smoothScroll({
//     // scrollElement: $('div.scrollme'),
//     // scrollTarget: '#findme'
//   });
//   return false;
// });
export default HeaderSmoothScroll;