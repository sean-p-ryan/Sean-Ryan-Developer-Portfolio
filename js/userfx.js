//checks whether nav bar background is full screen
var fullScreenNav = false;
//selects "Sean Ryan" text and "Projects" in nav bar
var seanRyan = document.querySelector("#sean-ryan");
var projects = document.querySelector("#projects");

//add underline to "Sean Ryan" text
const addUnderlineToSr = () => {
  seanRyan.classList.add("text-highlight-blue");
};

//remove underline from "Sean Ryan" text
const removeUnderlineFromSr = () => {
  seanRyan.classList.remove("text-highlight-blue");
};

//remove blue underline from "projects"
const removeUnderlineFromProjects = () => {
  projects.classList.remove("text-highlight-blue-li");
};

//add blue underline to "projects"
const addUnderlineToProjects = () => {
  projects.classList.add("text-highlight-blue-li");
};


// add underline to "projects" or "Sean Ryan" on click
document.addEventListener(
  "click",
  function(e) {
    if (e.target.matches("#projects")) {
        removeUnderlineFromSr();
        addUnderlineToProjects();
      } else if (e.target.matches("#sean-ryan")){
        removeUnderlineFromProjects();
        addUnderlineToSr();
      }
    false;
  });

window.addEventListener("load", function(){
  let scrollPos = pageYOffset;
  if (scrollPos != 0) {
    removeUnderlineFromSr();
    addUnderlineToProjects();
  }
})

//change nav underline on scroll
const changeUnderlineOnScroll = (scrollPos) => {
  if (scrollPos >= 770) {
    removeUnderlineFromSr();
    addUnderlineToProjects();
  } else {
    removeUnderlineFromProjects();
    addUnderlineToSr();
  }
};

//listen for scroll
window.addEventListener("scroll", function(e) {
  scrollPos = pageYOffset;
  changeUnderlineOnScroll(scrollPos);
});

//add transition to nav bar on scrollPos
window.addEventListener("scroll", function(e) {
  let navBar = document.querySelector(".navbar-wrapper");
  let scrollPos = pageYOffset;
  if (scrollPos > 316) {
    navBarText.style.marginTop = "0px";
    navBar.style.height = "100px";
  } else {
    navBarText.style.marginTop = "30px";
    navBar.style.height = "140px";
  }
});

//increase/decrease height of mobile nav container on hamburger click
document.addEventListener("click", function(e) {
    var mobileNavBackground = document.querySelector(".navbar-wrapper");
      if (e.target.matches(".fas") && fullScreenNav === false){
        mobileNavBackground.style.height = "100vh";
        fullScreenNav = true;
      } else if (e.target.matches(".fas") || e.target.matches(".nav-item") || fullScreenNav === true){
        mobileNavBackground.style.height = "100px";
        fullScreenNav = false;
      }
});
