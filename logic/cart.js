import { cart, reuseCart, saveStorage } from "../src/database.js";

export function updateCart() {
  const container = document.querySelector(".list-cart");
  saveStorage();
  renderCart(container, cart);
  subTotalCart();
}

function renderCart(container, product) {
  let titleCart = document.querySelector(".cart-title");
  container.innerHTML = "";
  console.log("Type of product:", typeof product);
  product.forEach((e) => {
    container.innerHTML += `
         <div class="container-list-cart">
          <input type="checkbox" class="target-produk" value='choosen' data-id="${e.id}">
          <img src="${e.image}" alt="${e.nama}" class="icon-product">
          <div class="info-product">
              <h4 class="name">${e.nama}</h4>
              <p class="description">${e.kategori},${e.size}</p>
              <span class="product-price">Rp.${e.price.toLocaleString()}</span>
          </div>
          <div class ="quantity">
              <button class="operator-kuantitas" value='minus' data-id="${e.id}">
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                </svg>
              </button>
              <label class="demand">${e.recentStockProduct}</label>
              <button class="operator-kuantitas" value='plus' data-id="${e.id}">
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                </svg>
              </button>
            </div>
          <button class="delete-product" value='delete' data-id="${e.id}">hapus barang</button>
      </div>`;
  });
  titleCart.innerHTML = "";
  titleCart.textContent = `My cart ${product.length}`;

  const selectButton = container.querySelectorAll(".operator-kuantitas");
  selectButton.forEach((b) => {
    b.addEventListener("click", (butt) => {
      let buttonValue = butt.target.closest(".operator-kuantitas").value;
      let itemId = butt.target.closest(".operator-kuantitas").dataset.id;
      console.log(buttonValue);
      operateQuantity(buttonValue, itemId, container);
    });

    const deleteButton = container.querySelectorAll(".delete-product");
    deleteButton.forEach((deleted) => {
      deleted.addEventListener("click", (d) => {
        let valueDelete = d.target.closest(".delete-product").dataset.id;
        console.log(typeof valueDelete);
        let valueButton = d.target.closest(".delete-product").value;
        deletedProductCart(valueDelete, valueButton);
      });
    });
  });
}

function operateQuantity(event, data, container) {
  let quantityCart = cart.map((item) => {
    let recentStock = item.recentStockProduct;

    if (item.id == data) {
      switch (event) {
        case "minus":
          if (recentStock > 1) recentStock--;
          break;
        case "plus":
          recentStock++;
          break;
      }
    }
    return {
      ...item,
      recentStockProduct: recentStock,
    };
  });
  reuseCart(quantityCart);
  updateCart();
}

function deletedProductCart(value, name) {
  let operateDelete = cart.filter((item) => item.id !== +value);
  console.log("kieh dihapus:" + cart);
  reuseCart(operateDelete);
  updateCart();
}

function subTotalCart() {
  const totalPriceCart = document.querySelector(".footer-cart .total-price");

  let operateSUM = cart.reduce((result, e) => {
    return result + e.price * e.recentStockProduct;
  }, 0);
  totalPriceCart.textContent = `Rp.${operateSUM.toLocaleString()}`;
}
