//checks whether nav bar background is full screen
var fullScreenNav = false;
//selects "Sean Ryan" text and "Projects" in nav bar
var seanRyan = document.querySelector("#sean-ryan");
var projects = document.querySelector("#projects");

//selects navbar
var navBar = document.querySelector(".nav-bar-container");

//selects all text in nav bar
var navUl = document.querySelector(".nav-ul");
var homeText = document.querySelector("#sean-ryan");

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
  let indexRegExp = new RegExp("index");
  if (indexRegExp.test(window.location.href) && (window.pageYOffset != 0)){
    removeUnderlineFromSr();
    addUnderlineToProjects();
  } else if (indexRegExp.test(window.location.href)){
    addUnderlineToSr();
  };
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
    // navUl.style.marginTop = "0px";
    // homeText.style.marginTop = "0px";
    navBar.style.height = "100px";
  } else {
    // navUl.style.marginTop = "30px";
    // homeText.style.marginTop = "30px";
    navBar.style.height = "120px";
  }
});



//increase/decrease height of mobile nav container on hamburger click
document.addEventListener("click", function(e) {
    var mobileNavBackground = document.querySelector(".navbar-wrapper");
      if (e.target = mobileNavBackground && fullScreenNav === false){
        mobileNavBackground.style.height = "100vh";
        fullScreenNav = true;
      } else if (e.target = mobileNavBackground && fullScreenNav === true){
        mobileNavBackground.style.height = "100px";
        fullScreenNav = false;
      }
});
