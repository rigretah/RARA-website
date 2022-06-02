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

// VIDEO
