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
  document.querySelector(".h2-drop-down").addEventListener("click", backUp);
}

function backUp() {
  document.querySelector(".categories-drop-down").classList.add("hide");
}

// FETCHING & DISPLAYING DATA

// SINGLE CATEGORY LINK: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/categories/7

// const url = `https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/categories/${id}_embed`;

// ALL PRODUCTS IN A SINGLE CATEGORY: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?categories=7

// ALL PRODUCTS
// const url =
//   "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?per_page=70&_embed";

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}
async function loadData() {
  const response = await fetch(
    "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?per_page=70&_embed"
  );
  console.log("response", response);
  const artworkData = await response.json();
  displayArtworks(artworkData);
}
async function displayArtworks(userJSON) {
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
