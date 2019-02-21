var navItems = document.querySelectorAll(".nav-item");
var activeNavItem = null;
//individual nav items
var seanRyan = document.querySelector("#sean-ryan");
var home = document.querySelector("#home");
var projects = document.querySelector("#projects");
var about = document.querySelector("#about");
var contacat = document.querySelector("#contact");

//add and blue underline to or from "Sean Ryan" text
const addUnderlineToSr = () => {
  seanRyan.classList.add("text-highlight-blue");
  activeNavItem = seanRyan;
};

const removeUnderlineFromSr = () => {
  seanRyan.classList.remove("text-highlight-blue");
};

//add or remove blue underline to or from nav item
const addUnderlineToNavItem = item => {
  item.classList.add("text-highlight-blue-li");
  activeNavItem = item;
};

const removeUnderlineFromNavItem = item => {
  item.classList.remove("text-highlight-blue-li");
};

//listen for nav bar item click
document.addEventListener(
  "click",
  function(e) {
    if (e.target.matches(".nav-item")) {
      navItems.forEach(function(element) {
        if (element.matches("#sean-ryan")) {
          removeUnderlineFromSr(e.target);
        } else {
          removeUnderlineFromNavItem(element);
        }
        if (e.target.matches("#sean-ryan")) {
          addUnderlineToSr(e.target);
        } else {
          addUnderlineToNavItem(e.target);
        }
      });
    }
  },
  false
);

const addUnderlineOnScroll = (active, scrollPos) => {
  removeUnderlineFromSr();
  navItems.forEach(element => {
    removeUnderlineFromNavItem(element);
    if (scrollPos <= 316) {
      addUnderlineToSr();
    } else if ((element = active)) {
      addUnderlineToNavItem(active);
    }
  });
};

//add blue underline to nav items on scroll
window.addEventListener("scroll", function(e) {
  let scrollPos = pageYOffset;
  if (scrollPos <= 315) {
    activeNavItem = home;
    console.log(activeNavItem);
    addUnderlineOnScroll(activeNavItem, scrollPos);
  } else if (scrollPos >= 316 && scrollPos <= 1233) {
    activeNavItem = projects;
    addUnderlineOnScroll(activeNavItem, scrollPos);
  } else if (scrollPos >= 1234 && scrollPos <= 1937) {
    activeNavItem = about;
    addUnderlineOnScroll(activeNavItem, scrollPos);
  } else if (scrollPos >= 1938) {
    activeNavItem = contact;
    addUnderlineOnScroll(activeNavItem, scrollPos);
  }
});

//add transition to nav bar on scrollPos
window.addEventListener("scroll", function(e) {
  let navBarText = document.querySelector("#bs-nav-demo");
  let navBar = document.querySelector(".navbar-inverse");
  let scrollPos = pageYOffset;
  if (scrollPos > 316) {
    navBarText.style.marginTop = "0px";
    navBar.style.height = "105px";
  } else {
    navBarText.style.marginTop = "30px";
    navBar.style.height = "140px";
  }
});
