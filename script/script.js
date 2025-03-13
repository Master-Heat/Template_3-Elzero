const megaMenu = document.getElementById("mega-menu");
function toggleMenu() {
  if (megaMenu.classList.contains("hide-mega-menu")) {
    megaMenu.classList.replace("hide-mega-menu", "show-mega-menu");
  } else {
    megaMenu.classList.replace("show-mega-menu", "hide-mega-menu");
  }
}
