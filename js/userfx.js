var seanRyan = document.querySelector("#sean-ryan");
var about = document.querySelector("#about-link");
var projects = document.querySelector("#projects-link");
var contact = document.querySelector("#contact-link");

var navItems = document.querySelectorAll(".nav-item")


var active = seanRyan;
var prev = null;

document.addEventListener("click", function(e) {
  // console.log(e.target);
  if (e.target.matches(".nav-item")){
    navItems.forEach(function(element, index){
      console.log(element);
      if (element.matches("#sean-ryan")){
        element.classList.remove("text-highlight-blue")
      } else {
        element.classList.remove("text-highlight-blue-li");
      }
      console.log(e.target)
      if (e.target.matches("#sean-ryan")){
        e.target.classList.add("text-highlight-blue");
      } else {
        e.target.classList.add("text-highlight-blue-li");
      }
    })
    }
  }, false)
