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
