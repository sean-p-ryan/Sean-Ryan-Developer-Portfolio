//selects "Sean Ryan" text in  and "Projects" in nav bar
let projects = document.querySelector(".projects-selector");
let navItems = document.querySelectorAll(".nav-item");
let about = document.querySelector(".about-selector")
let contact = document.querySelector(".contact-selector")

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

// Remove blue underline from all nav items 
const removeBlueUnderline = () => {
    navItems.forEach(item => {
        item.classList.remove("text-highlight-blue-li");    
    })
}

// Add blue underline to "projects"
const addUnderlineToProjects = () => {
    projects.classList.add("text-highlight-blue-li");
};

// Add blue underline to "about"
const addUnderlineToAbout = () => {
    about.classList.add("text-highlight-blue-li");
};

// Add blue underline to "Contact"
const addUnderlineToContact = () => {
    contact.classList.add("text-highlight-blue-li");
};

// Add gray background to nav on scroll
const addBlackNavBackground = () => {
    navBar.classList.add("nav-background-black");
}

// Removes black background from nav bar
const removeBlackNavBackground = () => {
    navBar.classList.remove("nav-background-black");
}

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

const makeNavBarTextWhite = () => {
    console.log("here are teh nav items navItems" + navItems)
    navItems.forEach(item => {
        item.style.color = '#fff'
    })    
}

const makeNavBarTextBlack = () => {
    navItems.forEach(item => {
        item.style.color = '#0B0B0D';
    })      
}

// Listen for click on nav items and toggle icon
document.addEventListener(
    "click",
    function(e) {
        console.log(fullScreenNav);
        if (e.target.closest(".custom-nav-toggle")) {
            mobileNavToggle();
        } else if (window.innerWidth < 992) {
            console.log('in remove nav toggle listener')
            mobileNavToggle();
        } else if (e.target.matches(".projects-selector")) {
            addUnderlineToProjects();
            navBar.classList.add("nav-background-gray");
        } else if (e.target.matches("#sean-ryan")) {
            removeUnderlineFromProjects();
            addUnderlineToSr();
        }
    });

// Add nav bar effects and item underlines on scroll
window.addEventListener("scroll", function(e) {
    scrollPos = pageYOffset;
    addBlackNavBackground();
    makeNavBarTextWhite();
    if (window.innerWidth > 992 && scrollPos > 764 && scrollPos <= 1652) {
        removeBlueUnderline();
        addUnderlineToAbout();
    } else if (window.innerWidth > 992 && scrollPos >= 1653 && scrollPos <= 3199) {
        removeBlueUnderline();
        addUnderlineToProjects();
    } else if (window.innerWidth > 992 && scrollPos >= 3200) {
        console.log("hey")
        removeBlueUnderline();
        addUnderlineToContact();
    } else if (window.innerWidth > 992 && scrollPos === 0) {
        removeBlueUnderline();
        removeBlackNavBackground();
        makeNavBarTextBlack();
    }
});


// Typewriter effect 
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hey! I'm Sean.", "I'm a full-stack developer", "who lives and codes in NYC.", "Check out my work,", "and feel free to reach out."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".typewriter-text").innerHTML = text.substring(0, i+1) +'<span class="cursor" aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });