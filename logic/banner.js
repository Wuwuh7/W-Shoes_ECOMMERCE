import { link_banner } from "../src/database.js";

export function carouselSystem(slider) {
  try {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let currentIndex = 0;

    prev.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = link_banner.length - 1;
      }
      updateSlider(currentIndex, slider);
    });

    next.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= link_banner.length) {
        currentIndex = 0;
      }
      updateSlider(currentIndex, slider);
    });
  } catch (error) {
    console.log(`${error}`);
  }
}

function updateSlider(firstPage, slide) {
  try {
    const shift = (firstPage * -100) / link_banner.length;
    slide.style.transform = `translateX(${shift}%)`;
  } catch (error) {
    console.log(`${error}`);
  }
}
