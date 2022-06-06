//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

// ------ DISPLAYING DATA -----

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
  const template = document.querySelector("#artworkTemplate").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(".artwork-title").textContent = artwork.title.rendered;
  copy.querySelector(".artwork-category").textContent =
    artwork._embedded["wp:term"][0][0].name;
  copy.querySelector(".artwork-description").textContent = artwork.description;
  copy.querySelector(
    ".artwork-image"
  ).src = `${artwork._embedded["wp:featuredmedia"][0].source_url}`;
  copy.querySelector(".artwork-image").alt = artwork.title.rendered;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `RARA | ${artwork.title.rendered}`;

  // select parent
  const parent = document.querySelector("main");
  // append it
  parent.appendChild(copy);
}
