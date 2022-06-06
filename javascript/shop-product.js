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

// ------ DISPLAYING DATA ------

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/" +
  `${id}?_embed`;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayArtwork(data));

function displayArtwork(artwork) {
  console.log(artwork);

  // grab template
  const template = document.querySelector("#product-template").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(".product-title").textContent = artwork.title.rendered;
  copy.querySelector(".product-price").textContent = "DKK " + artwork.price;
  copy.querySelector(".product-category").textContent =
    artwork._embedded["wp:term"][0][0].name;
  copy.querySelector(".product-description").textContent = artwork.description;
  copy.querySelector(
    ".product-image"
  ).src = `${artwork._embedded["wp:featuredmedia"][0].source_url}`;
  copy.querySelector(".product-image").alt = artwork.title.rendered;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `RARA | ${artwork.title.rendered}`;

  // button
  copy.querySelector(".buy-button").addEventListener("click", showCart);

  // select parent
  const parent = document.querySelector("main");
  // append it
  parent.appendChild(copy);
}
