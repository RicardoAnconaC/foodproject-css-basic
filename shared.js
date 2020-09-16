var backdrop = document.querySelector(".backdrop");
var toggleHome = document.querySelector("#toggle-home");
var toggleNav = document.querySelector("#toggle-nav");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
});

toggleNav.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
});

toggleHome.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});