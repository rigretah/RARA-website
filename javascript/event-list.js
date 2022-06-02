//-------BURGER MENU-------
document.querySelector(".menu-icon").addEventListener("click", showBRGMenu);

function showBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.remove("hide");

  document.querySelector(".cross-icon").addEventListener("click", hideBRGMenu);
}

function hideBRGMenu() {
  document.querySelector(".burger-menu-popUp").classList.add("hide");
}

//  ------ DISPLAYING DATA ------

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}
async function loadData() {
  const response = await fetch(
    "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/event?_embed"
  );
  console.log("response", response);
  const eventData = await response.json();
  displayEvents(eventData);
}
async function displayEvents(userJSON) {
  userJSON.forEach((event) => {
    // select template & copy
    const template = document.querySelector("#past-events-template").content;
    const copy = template.cloneNode(true);
    // change content
    copy.querySelector(".event-title").textContent = event.title.rendered;
    copy.querySelector(
      ".event-image"
    ).src = `${event._embedded["wp:featuredmedia"][0].source_url}`;
    copy
      .querySelector(".event-link")
      .setAttribute("href", `event.html?id=${event.id}`);
    copy.querySelector(".event-date p").textContent = event.event_date;
    copy.querySelector(".event-location p").textContent = event.location;
    // append to main
    const parent = document.querySelector(".past-events-container");
    parent.appendChild(copy);
  });
}
