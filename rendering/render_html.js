import { updateCart } from "../logic/cart.js";
import { cart, data_product, link_banner } from "../src/database.js";

export function renderProduct(template, container, product) {
  container.innerHTML = "";
  product.forEach((element) => {
    const clone = template.content.cloneNode(true);
    const cardImg = clone.querySelector(".card-img");
    const titleProduct = clone.querySelector(".card-info .text-title");
    const bodyProduct = clone.querySelector(".text-body");
    const priceProduct = clone.querySelector(".card-footer .text-title");
    const buttonCart = clone.querySelector(".card-button");

    cardImg.style.backgroundImage = `url(${element.image})`;
    cardImg.style.backgroundSize = "cover";
    cardImg.style.backgroundPosition = "center";
    cardImg.style.backgroundRepeat = "no-repeat";

    titleProduct.textContent = element.nama;
    bodyProduct.textContent = element.kategori;
    priceProduct.textContent = `Rp. ${element.price.toLocaleString()}`;

    buttonCart.addEventListener("click", () => {
      handleEventCart(element.id);
    });
    container.appendChild(clone);
  });
} //rendering_html.js

export function cloneTamplate(template, container) {
  try {
    link_banner.forEach((e) => {
      const clone = template.content.cloneNode(true);
      const bannerImg = clone.querySelector(".imgBanner");

      bannerImg.src = `${e}`;
      container.appendChild(clone);
    });
  } catch (error) {
    console.log(`${error}`);
  }
} //rendering_html.js

export function renderReview(template, container, comments) {
  comments.forEach((e) => {
    const clone = template.content.cloneNode(true);
    const review_title = clone.querySelector(".card__title");
    const review_rating = clone.querySelector(".rating-stars");
    const review_descr = clone.querySelector(".card__descr");

    review_descr.textContent = e.comment;
    review_title.textContent = e.nama;

    const ratingValue = e.rating;
    const starsString = "⭐".repeat(ratingValue);
    review_rating.textContent = starsString;

    container.appendChild(clone);
  });
} //rendering_html.js

export function animateAddingFilter(button, sideBar) {
  button.addEventListener("click", (butt) => {
    sideBar.classList.toggle("display-filter");
    button.classList.toggle("after-open");
    let changeButton = () => {
      button.innerHTML = "";
      if (sideBar.classList.contains("display-filter")) {
        button.innerHTML = "<<";
      } else {
        button.innerHTML = ">>";
      }
    };
    return changeButton;
  });
} //rendering_html.js

function handleEventCart(idSelect) {
  let product;
  if (cart.some((data) => data.id === idSelect)) {
    alert("WIS ANA BARANGE WOYYYYYY!!!!");
  } else {
    product = data_product.find((data) => data.id === idSelect);
    cart.push({
      ...product,
      recentStockProduct: 1,
    });
  }
  updateCart();
  console.log(typeof cart);
}
