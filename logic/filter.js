import { data_product } from "../src/database.js";
import { renderProduct } from "../rendering/render_html.js";

export function filterCategoryProduct(template, container) {
  try {
    const kategoryCheckBox = document.querySelectorAll(
      ".category-filter input[type='checkbox']"
    );
    let filteredProduct;

    let handleKategories = () => {
      let selectedKategori = [];
      kategoryCheckBox.forEach((e) => {
        if (e.checked) {
          selectedKategori.push(e.value);
        }
      });
      if (selectedKategori.length === 0) {
        filteredProduct = data_product;
      } else {
        filteredProduct = data_product.filter((e) =>
          selectedKategori.includes(e.kategori)
        );
      }
      renderProduct(template, container, filteredProduct);
    };

    kategoryCheckBox.forEach((e) => {
      e.addEventListener("change", handleKategories);
    });
  } catch (error) {
    console.log(`${error}`);
  }
}

export function filterPriceProduct(template, container) {
  const priceCheckBox = document.querySelectorAll(
    ".price-filter input[type='checkbox']"
  );
  let filteredProduct;
  let minimumPrice = 1000000;
  let maksimumPrice = 2000000;

  let handlePrice = () => {
    let selectedPrice = [];
    priceCheckBox.forEach((e) => {
      if (e.checked) {
        selectedPrice.push(e.value);
      }
    });

    if (selectedPrice.length === 0) {
      filteredProduct = data_product;
    } else {
      filteredProduct = data_product.filter((product) => {
        return selectedPrice.some((selection) => {
          switch (selection) {
            case "minimum":
              return product.price < minimumPrice;
            case "middle":
              return (
                product.price >= minimumPrice && product.price <= maksimumPrice
              );
            case "maximum":
              return product.price > maksimumPrice;
            default:
              return false;
          }
        });
      });
    }
    renderProduct(template, container, filteredProduct);
  };

  priceCheckBox.forEach((e) => {
    e.addEventListener("change", handlePrice);
  });
}

export function filterSizeProduct(template, container) {
  const sizeCheckBox = document.querySelectorAll(
    ".size-filter input[type='checkbox']"
  );
  let filteredProduct;
  let lowSize = [36, 37, 38];
  let midSize = [39, 40, 41];
  let highSize = [42, 43, 44];

  let handleSize = () => {
    let selectedSize = [];
    sizeCheckBox.forEach((e) => {
      if (e.checked) {
        selectedSize.push(e.value);
      }
    });

    if (selectedSize.length === 0) {
      filteredProduct = data_product;
    } else {
      filteredProduct = data_product.filter((product) => {
        return selectedSize.some((selection) => {
          let targetSizeRange;
          switch (selection) {
            case "Low-size":
              targetSizeRange = lowSize;
              break;
            case "Mid-size":
              targetSizeRange = midSize;
              break;
            case "High-size":
              targetSizeRange = highSize;
              break;
            default:
              return false;
          }

          return product.size.some((size) =>
            targetSizeRange.includes(Number(size))
          );
        });
      });
    }
    renderProduct(template, container, filteredProduct);
  };

  sizeCheckBox.forEach((e) => {
    e.addEventListener("change", handleSize);
  });
}
