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

document
  .querySelector(".select-category-container")
  .addEventListener("click", dropDown);

function dropDown() {
  document.querySelector(".categories-drop-down").classList.remove("hide");
  document.querySelector(".drop-down-arrow").classList.add("up-arrow");

  document
    .querySelector(".select-category-container")
    .removeEventListener("click", dropDown);

  document
    .querySelector(".select-category-container")
    .addEventListener("click", backUp);

  // document
  //   .querySelectorAll(".illustration")
  //   .addEventListener("click", showSelection);
}

// function showSelection() {
//   console.log("showSelection");
//   // this.classList.add("selected");
//   document.querySelector(".see-all").classList.remove("selected");
// }

function backUp() {
  // document.querySelector(".categories-drop-down").classList.add("hide");
  document.querySelector(".drop-down-arrow").classList.remove("up-arrow");

  document.querySelector(".categories-drop-down").classList.toggle("hide");
  document
    .querySelector(".select-category-container")
    .addEventListener("click", dropDown);
}

// LINKS FOR DATA

// ALL PRODUCTS IN A SINGLE CATEGORY: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?categories=7

// ALL PRODUCTS: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?per_page=55&_embed

// ---------- SHOW ALL PRODUCTS / SHOW SELECTED CATEGORY ----------

window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("categories");
let url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?";

function init() {
  if (category) {
    url += "categories=" + `${category}&_embed`;
  } else {
    url += "per_page=55&_embed";
  }

  showCategory();

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayArtworks(data));
}

function showCategory() {
  console.log("showCategory", category);
  if (category === "4") {
    document.querySelector(".see-all").classList.remove("selected");
    document.querySelector(".illustration").classList.add("selected");
  }
  if (category === "3") {
    document.querySelector(".see-all").classList.remove("selected");
    document.querySelector(".digital-art").classList.add("selected");
  }
  if (category === "8") {
    document.querySelector(".see-all").classList.remove("selected");
    document.querySelector(".merchandise").classList.add("selected");
  }
  if (category === "6") {
    document.querySelector(".see-all").classList.remove("selected");
    document.querySelector(".design").classList.add("selected");
  }
  if (category === "7") {
    document.querySelector(".see-all").classList.remove("selected");
    document.querySelector(".consulting").classList.add("selected");
  }
}

async function displayArtworks(userJSON) {
  console.log("Displaying Artworks");
  userJSON.forEach((artwork) => {
    // select template & copy
    const template = document.querySelector("#portfolio-list-template").content;
    const copy = template.cloneNode(true);
    // change content
    copy.querySelector(".portfolio-list-title").textContent =
      artwork.title.rendered;
    copy.querySelector(".portfolio-list-category").textContent =
      artwork._embedded["wp:term"][0][0].name;
    copy.querySelector(
      ".portfolio-list-image"
    ).src = `${artwork._embedded["wp:featuredmedia"][0].source_url}`;
    copy
      .querySelector(".portfolio-list-link")
      .setAttribute("href", `portfolio-artwork.html?id=${artwork.id}`);
    // append to main
    const parent = document.querySelector(".porfolio-list-container");
    parent.appendChild(copy);
  });
}
