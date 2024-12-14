const mobileMenu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// write function to toggle visibility
function toggleVisibility(element, show) {
  if (show) {
    element.classList.toggle("active");
  }
}

// toogle visibility for hamburger menu
mobileMenu.addEventListener("click", () => {
  toggleVisibility(navLinks, true);

  if (navLinks.classList.contains("active")) {
    mobileMenu.src = "./images/icon-close.svg";
  } else {
    mobileMenu.src = "./images/icon-hamburger.svg";
  }
});
