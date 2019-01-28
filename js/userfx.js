var headshot = document.querySelector(".headshot-image");

headshot.addEventListener("mouseenter", e => {
  e.target.classList.add("headshot-image-hover");
  e.target.innerText = "You look fantastic today!"
})

headshot.addEventListener("mouseout", e => {
  e.target.classList.remove("headshot-image-hover");
  e.target.innerHTML = "";
})
