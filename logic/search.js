import FuzzySearch from "fuzzy-search";
import { renderProduct } from "../rendering/render_html.js";
import { data_product } from "../src/database.js";

export function searchEngine(template, container) {
  const searching = document.querySelector("input[type ='search']");

  let checkingWords = new FuzzySearch(data_product, ["nama"], {
    caseSensitive: false,
  });

  searching.addEventListener("input", (s) => {
    let valueSearch = s.target.value;
    let result = checkingWords.search(valueSearch);

    if (valueSearch.length === 0) {
      renderProduct(template, container, data_product);
      return;
    }
    renderProduct(template, container, result);
  });
}
