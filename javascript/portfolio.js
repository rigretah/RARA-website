const url = "https://cloudmae.dk/rara/wp_SEM2-EXAM/wp-json/wp/v2/product";

fetch(url)
  .then((res) => res.json())
  .then((data) => setCategoryLinks(data));

function setCategoryLinks(category) {
  // document
  //   .querySelector(".category-link")
  //   .setAttribute("href", `portfolio-categories.html?id=${category.id}`);
}
