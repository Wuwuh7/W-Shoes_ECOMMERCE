
const detail_product = document.querySelector(".detail-product");

let data_product = [
    {
        id: 1,
        nama: "Ardiles-10 pro",
        kategori: "Sport",
        price: 1500000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["39", "40", "41", "42", "43"]
    },
    {
        id: 2,
        nama: "Eiger-Raptor",
        kategori: "Mountain Style",
        price: 2500000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["42", "43", "44"]
    },
    {
        id: 3,
        nama: "Nike-Air Max",
        kategori: "Sport",
        price: 1800000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["38", "39", "40", "41", "42"]
    },
    {
        id: 4,
        nama: "Adidas-Predator",
        kategori: "Sport",
        price: 2200000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["42", "43", "44"]
    },
    {
        id: 5,
        nama: "Reebok-Nano",
        kategori: "Sport",
        price: 1600000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["38", "39", "40"]
    },
    {
        id: 6,
        nama: "New Balance-Fresh Foam",
        kategori: "Sport",
        price: 1750000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["41", "42", "43", "44"]
    },
    {
        id: 7,
        nama: "Converse-Chuck Taylor",
        kategori: "Sport",
        price: 850000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["38", "39", "40", "41"]
    },
    {
        id: 8,
        nama: "Vans-Old Skool",
        kategori: "Sport",
        price: 950000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["38", "39", "40", "41"]
    },
    {
        id: 9,
        nama: "Puma-Suede",
        kategori: "Sport",
        price: 1100000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["38", "39", "40", "41"]
    },
    {
        id: 10,
        nama: "Asics-Gel-Kayano",
        kategori: "Sport",
        price: 1900000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["40", "41", "42", "43", "44"]
    },
    {
        id: 11,
        nama: "Salomon-Speedcross",
        kategori: "Mountain Style",
        price: 2800000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["42", "43", "44"]
    },
    {
        id: 12,
        nama: "Merrell-Moab",
        kategori: "Mountain Style",
        price: 2650000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["41", "42", "43"]
    },
    {
        id: 13,
        nama: "La Sportiva-Tarantulace",
        kategori: "Mountain Style",
        price: 3100000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["39", "40", "41"]
    },
    {
        id: 14,
        nama: "Bata-Professional",
        kategori: "Professional",
        price: 750000,
        image: "asset/image-product/mans-shoe-svgrepo-com.svg",
        size: ["39", "40", "41", "42", "43"]
    },
    {
        id: 15,
        nama: "Clarks-Desert Boot",
        kategori: "Professional",
        price: 1600000,
        image: "asset/image-product/mans-shoe-svgrepo-com.svg",
        size: ["38", "39", "40"]
    },
    {
        id: 16,
        nama: "Dr. Martens-1460",
        kategori: "Professional",
        price: 2100000,
        image: "asset/image-product/mans-shoe-svgrepo-com.svg",
        size: ["38", "39", "40", "41", "42"]
    },
    {
        id: 17,
        nama: "Fila-Disruptor",
        kategori: "Sport",
        price: 1050000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["39", "40", "41"]
    },
    {
        id: 18,
        nama: "Under Armour-HOVR",
        kategori: "Sport",
        price: 1950000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["42", "43", "44"]
    },
    {
        id: 19,
        nama: "Keen-Targhee",
        kategori: "Mountain Style",
        price: 2400000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["42", "43", "44"]
    },
    {
        id: 20,
        nama: "Hush Puppies-Expert",
        kategori: "Professional",
        price: 1300000,
        image: "asset/image-product/mans-shoe-svgrepo-com.svg",
        size: ["39", "40", "41", "42"]
    }
];
let link_banner = [
    "asset/aset-banner/banner1.jpg",
    "asset/aset-banner/banner2.jpg",
    "asset/aset-banner/banner3.jpg"
];

function showProduct() {
    const templateCard = document.getElementById("card-katalog-template");
    const containerCard = document.querySelector(".container-grid");

    renderProduct(templateCard,containerCard,data_product);
    filterCategoryProduct(templateCard,containerCard);
    filterPriceProduct(templateCard,containerCard);
    filterSizeProduct(templateCard,containerCard);
}

function display_banner() {
    const tamplateBanner = document.querySelector(".banner");
    const containerBanner = document.querySelector(".slider");

    cloneTamplate(tamplateBanner,containerBanner);
    carouselSystem(containerBanner);
}
display_banner();
showProduct();

function renderProduct(template,container,product) {
    container.innerHTML = "";
    product.forEach(element => {
        const clone = template.content.cloneNode(true);
        const cardImg = clone.querySelector(".card-img");
        const titleProduct = clone.querySelector(".card-info .text-title");
        const bodyProduct = clone.querySelector(".text-body");
        const priceProduct = clone.querySelector(".card-footer .text-title");

        cardImg.style.backgroundImage = `url(${element.image})`;
        cardImg.style.backgroundSize = "cover";
        cardImg.style.backgroundPosition = "center";
        cardImg.style.backgroundRepeat = "no-repeat";
        

        titleProduct.textContent = element.nama;
        bodyProduct.textContent = element.kategori;
        priceProduct.textContent = `Rp. ${element.price.toLocaleString()}`;

        container.appendChild(clone);
})};

function cloneTamplate(template,container) {
    try {
        link_banner.forEach(e => {
            const clone = template.content.cloneNode(true);
            const bannerImg = clone.querySelector(".imgBanner");
    
            bannerImg.src = `${e}`;
            container.appendChild(clone);
        });  
    } catch (error) {
        console.log(`${error}`);
    }
}

function carouselSystem(slider) {
    try {
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
    
        let currentIndex = 0;
    
        prev.addEventListener("click", () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = link_banner.length - 1;
        }
        updateSlider(currentIndex,slider);
    });
    
        next.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex >= link_banner.length) {
                currentIndex = 0;
    }
    updateSlider(currentIndex,slider);
});
    
    } catch (error) {
        console.log(`${error}`);
    }
}

function updateSlider(firstPage,slide) {
    try {
        const shift = (firstPage * -100)/link_banner.length;

        slide.style.transform = `translateX(${shift}%)`;
       } catch (error) {
     console.log(`${error}`);   
    }
}

function filterCategoryProduct(template,container) {
    try {
   const  kategoryCheckBox = document.querySelectorAll(".category-filter input[type='checkbox']");
   let filteredProduct;
  
   let handleKategories = () => {
    let selectedKategori = [];
    kategoryCheckBox.forEach(e => {
            if (e.checked) {
                selectedKategori.push(e.value);
            }
         });
         if (selectedKategori.length === 0) {
            filteredProduct = data_product;
        } else {
            filteredProduct = data_product.filter(e => selectedKategori.includes(e.kategori));
        }
         renderProduct(template,container,filteredProduct);
         };
  
    kategoryCheckBox.forEach(e => {
        e.addEventListener("change", handleKategories);
    });
   
    } catch (error) {
        console.log(`${error}`);
    }
}

function filterPriceProduct(template, container) {
    const priceCheckBox = document.querySelectorAll(".price-filter input[type='checkbox']");
    let filteredProduct;
    let minimumPrice = 1000000;
    let maksimumPrice = 2000000;

    let handlePrice = () => {
        let selectedPrice = [];
        priceCheckBox.forEach(e => {
            if (e.checked) {
                selectedPrice.push(e.value);
            }
        });

        if (selectedPrice.length === 0) {
            filteredProduct = data_product;
        } else {
            filteredProduct = data_product.filter(product => {
               return selectedPrice.some(selection => {
                    switch (selection) {
                        case 'minimum':
                            return product.price < minimumPrice;
                        case 'middle':
                            return product.price >= minimumPrice && product.price <= maksimumPrice;
                        case 'maximum':
                            return product.price > maksimumPrice;
                        default:
                            return false;
                    }
                });
            });
        }
        renderProduct(template, container, filteredProduct);
    };

    priceCheckBox.forEach(e => {
        e.addEventListener("change", handlePrice);
    });
}

function filterSizeProduct(template,container) {
    const  sizeCheckBox = document.querySelectorAll(".size-filter input[type='checkbox']");
    let filteredProduct;
    let lowSize = [36,37,38];
    let midSize = [39,40,41];
    let highSize = [42,43,44];
    
    let handleSize = () => {
        let selectedSize = [];
        sizeCheckBox.forEach(e => {
            if (e.checked) {
                selectedSize.push(e.value);
            }
        });

        if (selectedSize.length === 0) {
            filteredProduct = data_product;
        } else {
            filteredProduct = data_product.filter(product => {
              return selectedSize.some(selection => {
                    let targetSizeRange;
                    switch (selection) {
                        case 'Low-size':
                            targetSizeRange = lowSize;
                            break;
                        case 'Mid-size':
                            targetSizeRange = midSize;
                            break;
                        case 'High-size':
                            targetSizeRange = highSize;
                            break;
                        default:
                            return false;
                        }

                 return product.size.some(size => targetSizeRange.includes(Number(size)));
                });
            });
        }
        renderProduct(template,container,filteredProduct);
    };

    sizeCheckBox.forEach(e => {
        e.addEventListener("change", handleSize);
    });
}

function reviewPages() {
    const template = document.getElementById("review-card");
    const container = document.querySelector(".review-container");

    renderReview(template,container,comments)
    automateCarousel(template,container);
}

function renderReview(template,container,comments) {
    
}

function automateCarousel(template,container) {

}