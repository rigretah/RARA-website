//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

//LOCAL NAVIGATION DROP DOWN
document.querySelector(".drop-down-arrow").addEventListener("click", dropDown);
document.querySelector(".h2-drop-down").addEventListener("click", dropDown);

function dropDown() {
  document.querySelector(".categories-drop-down").classList.remove("hide");

  document.querySelector(".up-arrow").addEventListener("click", backUp);
}

function backUp() {
  document.querySelector(".categories-drop-down").classList.add("hide");
}
