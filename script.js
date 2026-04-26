const navIcons = document.querySelectorAll(".nav-icon");

navIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    navIcons.forEach((item) => item.classList.remove("active"));
    icon.classList.add("active");
  });
});
