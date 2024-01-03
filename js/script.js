//togglele class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika cake menu diklik
document.querySelector("#cake-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//click diluar side bar untuk menghilangkan nav
const cake = document.querySelector("#cake-menu");

document.addEventListener("click", function name(e) {
  if (!cake.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
