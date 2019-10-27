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

// add gray background to nav on scroll
const addGrayNavBackground = (scrollPos) => {
    if (scrollPos > 0) {
        navBar.classList.add("nav-background-gray");
        navBar.classList.remove("nav-background-none");
    } else {
        navBar.classList.add("nav-background-none");
    }
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
            removeUnderlineFromSr();
            addUnderlineToProjects();
            // mobileNavToggle();
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
        removeUnderlineFromSr();
        addUnderlineToProjects();
    } else if (indexRegExp.test(window.location.href)) {
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

// change nav bar height on scroll
window.addEventListener("scroll", function(e) {
    scrollPos = pageYOffset;
    changeUnderlineOnScroll(scrollPos);
    if (window.innerWidth > 768) {
        addGrayNavBackground(scrollPos)
    }
});