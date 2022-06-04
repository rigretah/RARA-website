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

// ------ DISPLAY PURCHASE STEPS -----

document.querySelector(".step-1-button").addEventListener("click", step2);

function step2() {
  console.log("step2");
  // hide step 1
  document.querySelector(".step-1").classList.add("hide");

  // change step indicator
  document.querySelector(".step-title").textContent =
    "Step 2 - Payment Information";
  document.querySelector(".step-img").src = "images/purchase-steps-2.svg";

  // show step 2
  document.querySelector(".step-2").classList.remove("hide");

  // step 2 button
  document.querySelector(".step-2-button").addEventListener("click", step3);
}

function step3() {
  console.log("step3");
  // hide step 2
  document.querySelector(".step-2").classList.add("hide");

  // change step indicator
  document.querySelector(".step-title").textContent = "Step 3 - Review Order";
  document.querySelector(".step-img").src = "images/purchase-steps-3.svg";

  // show step 3
  document.querySelector(".step-3").classList.remove("hide");

  // step 3 button
  document.querySelector(".step-3-button").addEventListener("click", step4);
}

function step4() {
  console.log("step4");
  // hide step 3
  document.querySelector(".step-3").classList.add("hide");

  // change step indicator
  document.querySelector(".step-title").textContent =
    "Step 4 - Purchase Completed";
  document.querySelector(".step-img").src = "images/purchase-steps-4.svg";

  // hide order overview
  document.querySelector(".purchase-h1").style.display = "none";
  document.querySelector(".order-container").style.display = "none";

  // show step 4
  document.querySelector(".step-4").classList.remove("hide");

  // move step indicator
  document
    .querySelector(".step-indicator")
    .classList.add("order-indicator-step4");
}
