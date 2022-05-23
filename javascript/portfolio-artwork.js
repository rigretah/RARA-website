// COPIED CODE - TEST
// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
// const url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product" + id;

const url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/155";

// ALL ARTWORKS LINK: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?per_page=70

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

  // select parent
  const parent = document.querySelector("main");
  // append it
  parent.appendChild(copy);
}
