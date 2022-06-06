//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
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

// VIDEO ASPECT RATIO

let width = window.innerWidth;

if (width < 600) {
  document
    .querySelector("#myVideo")
    .setAttribute("src", "video/phone-view-small.mp4");
} else {
  document
    .querySelector("#myVideo")
    .setAttribute("src", "video/homepage-video.mp4");
}
