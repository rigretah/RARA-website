// ALL ARTWORKS LINK: https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product?per_page=70&_embed

// URL FOR WHEN LIST PAGES ARE SET UP

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// const url = `https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/${id}_embed`;

// const url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/" + id;

const url =
  "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/" +
  `${id}?_embed`;

// -----------------

// URL FOR TESTING

// const url =
//   "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product/155?_embed";

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

  // select parent
  const parent = document.querySelector("main");
  // append it
  parent.appendChild(copy);
}
