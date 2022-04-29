/***** selectors ****/
let navLinks = document.querySelector(".navbar");
let allViews = document.querySelectorAll(".view");
let popularBox = document.querySelector(".popular");

let createView = {
  home: () => {
    renderPopularBrands();
  },
  product: () => {
    return "<h1>This is a Product View</h1>";
  },
  product: () => {
    return "<h1>This is a About View</h1>";
  },
  contact: () => {
    return "<h1>This is a Contact View</h1>";
  },
};
let viewId = "product";
console.log(navLinks.querySelector(`[href="#${viewId}"]`));

window.addEventListener("hashchange", () => {
  let viewId = location.hash.substring(1);
  allViews.forEach((view, index) => {
    if (viewId === view.id) {
      view.style.display = "block";
      navLinks.querySelector(`[href="#${viewId}"]`).className = "active";
      createView[viewId]();
    } else {
      view.style.display = "none";
      navLinks[index].className = "";
    }
  });
});

function renderPopularBrands() {
  let bestRating = db.products
    .sort((a, b) => a.rating - b.rating < 0)
    .splice(1, 3);

  let text = ``;
  bestRating.forEach((product) => {
    text += `
    <div class="img-holder">
    <img src="${product.thumbnail}" alt="">
    <h2>${product.brand}</h2>
    </div>

    `;
  });
  popularBox.querySelector("article").innerHTML = text.trim();
}
