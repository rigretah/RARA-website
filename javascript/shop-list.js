//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

// ------ CART DROPDOWN -------

document.querySelector(".cart-icon").addEventListener("click", showCart);
document.querySelector(".close").addEventListener("click", showCart);

function showCart() {
  document.querySelector(".cart-drop-down").classList.toggle("hide");
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

// ---------- SHOW ALL PRODUCTS / SHOW SELECTED CATEGORY ----------

window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("categories");
let url =
  "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?tags=9&_embed&";

function init() {
  if (category) {
    url += "categories=" + `${category}`;
  } else {
    url += "per_page=30";
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
    const parent = document.querySelector(".product-list");
    parent.appendChild(copy);
  });
}
