import { data_product } from "../src/database.js";
import { renderProduct } from "../rendering/render_html.js";

let allFilter = {
  kategori: [],
  size: [],
  price: [],
};

export function filterCategoryProduct(template, container) {
  try {
    const kategoryCheckBox = document.querySelectorAll(
      ".category-filter input[type='checkbox']"
    );
    kategoryCheckBox.forEach((e) => {
      e.addEventListener("change", () => {
        const selectedButton = Array.from(kategoryCheckBox)
          .filter((i) => i.checked)
          .map((i) => i.value);
        allFilter.kategori = selectedButton;
        manageFilterProduct(template, container);
      });
    });
  } catch (error) {
    console.log(`${error}`);
  }
}

export function filterPriceProduct(template, container) {
  const priceCheckBox = document.querySelectorAll(
    ".price-filter input[type='checkbox']"
  );
  priceCheckBox.forEach((e) => {
    e.addEventListener("change", () => {
      const selectedButton = Array.from(priceCheckBox)
        .filter((i) => i.checked)
        .map((i) => i.value);
      allFilter.price = selectedButton;
      manageFilterProduct(template, container);
    });
  });
}

export function filterSizeProduct(template, container) {
  const sizeCheckBox = document.querySelectorAll(
    ".size-filter input[type='checkbox']"
  );
  sizeCheckBox.forEach((e) => {
    e.addEventListener("change", () => {
      const selectedButton = Array.from(sizeCheckBox)
        .filter((i) => i.checked)
        .map((i) => i.value);
      allFilter.size = selectedButton;
      manageFilterProduct(template, container);
    });
  });
}

let rulesFilter = {
  kategori: (currentData, select) => {
    return currentData.filter((e) => select.includes(e.kategori));
  },
  size: (currentData, select) => {
    const sizeRange = {
      "low-size": [36, 37, 38],
      "mid-size": [39, 40, 41],
      "high-size": [42, 43, 44],
    };
    return currentData.filter((e) => {
      select.some((label) =>
        sizeRange[label].some((n) => e.size.includes(Number(n)))
      );
    });
  },
  price: (currentData, select) => {
    return currentData.filter((product) => {
      return select.some((selection) => {
        if (selection === "minimum") return product.price < 1000000;
        if (selection === "middle")
          return product.price >= 1000000 && product.price < 2000000;
        if (selection === "maximum") return product.price > 2000000;
        return false;
      });
    });
  },
};

function manageFilterProduct(template, container) {
  const filterResult = Object.keys(allFilter).reduce(
    (currentData, key) => {
      const selection = allFilter[key];

      if (selection && selection.length > 0) {
        return rulesFilter[key](currentData, selection);
      }
      return currentData;
    },
    [...data_product]
  );

  container.innerHTML = "";

  if (filterResult.length === 0) {
    container.innerHTML = "";
  } else {
    renderProduct(template, container, filterResult);
  }
}
