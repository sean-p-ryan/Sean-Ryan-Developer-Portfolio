//selects "Sean Ryan" text in  and "Projects" in nav bar
let seanRyan = document.querySelector("#sean-ryan");
let projects = document.querySelector("#projects");

//selects navbar
let navBar = document.querySelector(".navbar-wrapper");

//selects all text in nav bar
let navUl = document.querySelector(".nav-ul");
let homeText = document.querySelector("#sean-ryan");

//selects mobile and toggle 
let mobileNavButton = document.querySelector(".custom-nav-toggle");

//stores vertical scroll position
let scrollPos = pageYOffset;

// Track if nav is full screen
let fullScreenNav = false;

//add underline to "Sean Ryan" text
const addUnderlineToSr = () => {
    seanRyan.classList.add("text-highlight-blue");
};

//remove blue underline from "projects"
const removeUnderlineFromProjects = () => {
    projects.classList.remove("text-highlight-blue-li");
};

// Add blue underline to "projects"
const addUnderlineToProjects = () => {
    projects.classList.add("text-highlight-blue-li");
};

// add gray background to nav on scroll
const addGrayNavBackground = () => {
    navBar.classList.add("nav-background-gray");
}

const removeGrayNavBackground = () => {
    navBar.classList.remove("nav-background-gray");
}

// Expose mobile nav options on icon click
const mobileNavToggle = () => {
    console.log(fullScreenNav)
    if (!fullScreenNav) {
        fullScreenNav = true;
        navBar.style.height = "100vh";
    } else {
        fullScreenNav = false;
        navBar.style.height = "100px";
    }
}


// Listen for click on nav items and toggle icon
document.addEventListener(
    "click",
    function(e) {
        console.log(e.target);
        if (e.target.matches("#projects")) {
            console.log("namd")
            addUnderlineToProjects();
            navBar.classList.add("nav-background-gray");
        } else if (e.target.matches("#sean-ryan")) {
            removeUnderlineFromProjects();
            addUnderlineToSr();
        } else if (e.target.closest(".custom-nav-toggle")) {
            console.log("button clicked")
            mobileNavToggle(e);
        }
    });


window.addEventListener("load", function() {
    let indexRegExp = new RegExp("index");
    if (indexRegExp.test(window.location.href) && (window.pageYOffset != 0)) {
        addUnderlineToProjects();
        navBar.classList.add("nav-background-gray");
    } else if (indexRegExp.test(window.location.href)) {
        addUnderlineToSr();
    };
})

// Add nav bar effects and item underlines on scroll
window.addEventListener("scroll", function(e) {
    scrollPos = pageYOffset;
    addGrayNavBackground();
    if (window.innerWidth > 768 && scrollPos > 770) {
        addUnderlineToProjects();
    } else if (window.innerWidth > 768 && scrollPos > 0 && scrollPos <= 770) {
        removeUnderlineFromProjects();
    } else if (window.innerWidth > 768 && scrollPos === 0) {
        removeGrayNavBackground();
    }
});