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
}

function backUp() {
  // document.querySelector(".categories-drop-down").classList.add("hide");
  document.querySelector(".drop-down-arrow").classList.remove("up-arrow");

  document.querySelector(".categories-drop-down").classList.toggle("hide");
  document
    .querySelector(".select-category-container")
    .addEventListener("click", dropDown);
}

// DISPLAY ALL PRODUCTS

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}

async function loadData() {
  const response = await fetch(
    "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?tags=9&per_page=70&_embed"
  );
  console.log("response", response);
  const artworkData = await response.json();
  displayArtworks(artworkData);
}

async function displayArtworks(userJSON) {
  userJSON.forEach((artwork) => {
    // select template & copy
    const template = document.querySelector("#shop-list-template").content;
    const copy = template.cloneNode(true);
    // change content
    copy.querySelector(".product-title").textContent = artwork.title.rendered;
    copy.querySelector(".product-price").textContent = "DKK " + artwork.price;
    copy.querySelector(
      ".product-image"
    ).src = `${artwork._embedded["wp:featuredmedia"][0].source_url}`;
    copy
      .querySelector(".product-link")
      .setAttribute("href", `shop-product.html?id=${artwork.id}`);
    // append to main
    const parent = document.querySelector("main");
    parent.appendChild(copy);
  });
}
