window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.backgroundColor = "#333";
  }
                      