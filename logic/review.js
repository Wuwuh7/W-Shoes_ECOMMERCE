export function automateCarousel(slider) {
  const cardReview = slider.querySelectorAll(".card-rating");
  const sectionReview = document.querySelector(".review-page");

  let currentIndex = 0;
  let intervalID = null;
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      intervalID = setInterval(() => {
        currentIndex++;
        if (currentIndex >= cardReview.length) {
          currentIndex = 0;
        }
        const calculating = currentIndex * (100 / cardReview.length);
        slider.style.transform = `translateX(-${calculating}%)`;
      }, 3000);
    } else {
      clearInterval(intervalID);
    }
  }, options);
  observer.observe(sectionReview);
}
