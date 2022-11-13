const $menu = document.querySelector("#menu-toggle");
const $btnFechar = document.querySelector("#menu-close");
const $menuOn = document.querySelector("#menu-on");
const $body = document.getElementsByTagName("body");

$menu.addEventListener("click", () => {
  $menuOn.style.display = "flex";
  unloadScrollBars();
});

$btnFechar.addEventListener("click", () => {
  $menuOn.style.display = "none";
  loadScrollBars();
});

function unloadScrollBars() {
  document.documentElement.style.overflow = "hidden";
}
function loadScrollBars() {
  document.documentElement.style.overflow = "scroll";
}
