//selects "Sean Ryan" text in  and "Projects" in nav bar
let navItems = document.querySelectorAll(".nav-item");

//selects navbar
let navBar = document.querySelector(".navbar-wrapper");

//selects mobile and toggle 
let mobileNavButton = document.querySelector(".custom-nav-toggle");

// Track if nav is full screen
let fullScreenNav = false;

// Expose mobile nav options on icon click
const mobileNavToggle = () => {
    if (!fullScreenNav) {
        fullScreenNav = true;
        navBar.style.height = "3.5rem";
    } else {
        fullScreenNav = false;
        navBar.style.height = "100vh";
    }
}

// Listen for click on nav items and toggle icon
document.addEventListener(
    "click",
    function (e) {
        if (e.target.closest(".custom-nav-toggle")) {
            mobileNavToggle();
        } else if (window.innerWidth < 992) {
            mobileNavToggle();
        }
    });

// Remove blue underline from all nav items 
const removeBlueUnderline = () => {
    navItems.forEach(item => {
        item.classList.remove("text-highlight-blue-li");
    })
}

function changeBodyContent(e) {
    console.log(e.target.id)
    const bodySections = document.querySelectorAll(".body-section")
    console.log(bodySections)
    bodySections.forEach(section => {
        section.classList.add("invisible")
    })
    bodySections.forEach(section => {
        if (section.classList.contains(e.target.id)) {   
            section.style.display = "block"
        } else {
            section.style.display = "none"
        }
    })
}

document.addEventListener(
    "click",
    function (e) {
        if (e.target.classList.contains("nav-item")) {
            removeBlueUnderline()
            e.target.classList.add("text-highlight-blue-li")
            changeBodyContent(e)
        }
    }
)