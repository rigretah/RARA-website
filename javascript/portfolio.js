//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

const url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product";

fetch(url)
  .then((res) => res.json())
  .then((data) => setCategoryLinks(data));

function setCategoryLinks(category) {
  // document
  //   .querySelector(".category-link")
  //   .setAttribute("href", `portfolio-categories.html?id=${category.id}`);
}

// VIDEO SOUND

const video = document.querySelector("#myVideo");
document.querySelector(".sound-icon").addEventListener("click", playSound);

function playSound() {
  video.muted = false;
  document.querySelector(".sound-icon").src = "images/icons/sound.svg";

  document.querySelector(".sound-icon").addEventListener("click", muteSound);
}

function muteSound() {
  video.muted = true;
  document.querySelector(".sound-icon").src = "images/icons/Mute.svg";

  document.querySelector(".sound-icon").removeEventListener("click", muteSound);
  document.querySelector(".sound-icon").addEventListener("click", playSound);
}
