// show info
// the elements
let infoBtn = document.querySelector(".info-btn");
let infoContent = document.querySelector(".info");
let icon = infoBtn.querySelector("i");

// toggle the info content when the info button is clicked
infoBtn.addEventListener("click", function () {
  // add the class
  infoContent.classList.toggle("show");

  // toggle the icon
  if (icon.classList.contains("fa-info-circle")) {
    icon.classList.remove("fa-info-circle");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-info-circle");
  }
});
