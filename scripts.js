//create variable to store current yOffset
var scroll = window.pageYOffset;
var nav = document.querySelector('#navBarMain');

//change styles of navbar if user scrolls below main section

if (scroll >= 128){
	nav.classList.add("navScroll");
} else {
	nav.classList.remove("navScroll");
}