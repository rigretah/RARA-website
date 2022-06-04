//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
  document
    .querySelector(".contact-link")
    .addEventListener("click", hideBRGMenu);
  document
    .querySelector(".brg-menu-contacts")
    .addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}
