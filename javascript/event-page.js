//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

// ----- DISPLAYING DATA -----

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/event/" + `${id}?_embed`;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayEvent(data));

function displayEvent(event) {
  console.log(event);

  // grab template
  const template = document.querySelector("#event-template").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(".event-title").textContent = event.title.rendered;
  copy.querySelector(".event-description").textContent = event.description;
  copy.querySelector(
    ".event-image"
  ).src = `${event._embedded["wp:featuredmedia"][0].source_url}`;
  copy.querySelector(".event-image").alt = event.title.rendered;
  copy.querySelector(".event-date p").textContent = event.event_date;
  copy.querySelector(".event-location p").textContent = event.location;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `RARA | ${event.title.rendered}`;

  // select parent
  const parent = document.querySelector("main");
  // append it
  parent.appendChild(copy);
}
