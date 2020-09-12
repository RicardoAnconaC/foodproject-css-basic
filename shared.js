var backdrop = document.querySelector(".backdrop");
var toggleHome = document.querySelector("#toggle-home");
var toggleNav = document.querySelector("#toggle-nav");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  mobileNav.style.display = 'none';
  backdrop.style.display = "none";
});

toggleNav.addEventListener("click", function() {
  mobileNav.style.display = 'none';
  backdrop.style.display = "none";
});

toggleHome.addEventListener("click", function() {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});