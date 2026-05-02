import {
  renderProduct,
  renderReview,
  cloneTamplate,
  animateAddingFilter,
} from "./rendering/render_html.js";
import { automateCarousel } from "./logic/review.js";
import { carouselSystem } from "./logic/banner.js";
import {
  filterCategoryProduct,
  filterPriceProduct,
  filterSizeProduct,
} from "./logic/filter.js";
import { searchEngine } from "./logic/search.js";
import { data_product, comments } from "./src/database.js";

function showProduct() {
  const templateCard = document.getElementById("card-katalog-template");
  const containerCard = document.querySelector(".container-grid");

  renderProduct(templateCard, containerCard, data_product);

  filterCategoryProduct(templateCard, containerCard);
  filterPriceProduct(templateCard, containerCard);
  filterSizeProduct(templateCard, containerCard);

  searchEngine(templateCard, containerCard);
}

function display_banner() {
  const tamplateBanner = document.querySelector(".banner");
  const containerBanner = document.querySelector(".slider");

  cloneTamplate(tamplateBanner, containerBanner);
  carouselSystem(containerBanner);
}
display_banner();
showProduct();

function showCartPage() {
  const toggleCart = document.querySelector(".icon-link");
  let setup_cart = () => {
    const displayCart = document.querySelector(".container-cart");
    displayCart.classList.toggle("display-cart");
  };

  toggleCart.addEventListener("click", setup_cart);
}
showCartPage();

function reviewPages() {
  const template = document.getElementById("review-card");
  const container = document.querySelector(".slider-review");

  renderReview(template, container, comments);
  automateCarousel(container);
}
reviewPages();

function displayAllFilter() {
  const addFilterButton = document.querySelector(".opened-filter");
  const filterSideBar = document.querySelector(".filter-content");
  animateAddingFilter(addFilterButton, filterSideBar);
}
displayAllFilter();
