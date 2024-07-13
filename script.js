document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("check").checked = false; // Close the menu
    });
  });
});
