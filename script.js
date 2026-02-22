
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
        size: ["40", "41", "42", "43", "44"]
    },
    {
        id: 3,
        nama: "Nike-Air Max",
        kategori: "Sport",
        price: 1800000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["39", "40", "41", "42"]
    },
    {
        id: 4,
        nama: "Adidas-Predator",
        kategori: "Sport",
        price: 2200000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["40", "41", "42", "43"]
    },
    {
        id: 5,
        nama: "Reebok-Nano",
        kategori: "Sport",
        price: 1600000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["39", "40", "41"]
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
        size: ["38", "39", "40", "41", "42"]
    },
    {
        id: 8,
        nama: "Vans-Old Skool",
        kategori: "Sport",
        price: 950000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["39", "40", "41", "42"]
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
        size: ["40", "41", "42", "43"]
    },
    {
        id: 11,
        nama: "Salomon-Speedcross",
        kategori: "Mountain Style",
        price: 2800000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["41", "42", "43", "44"]
    },
    {
        id: 12,
        nama: "Merrell-Moab",
        kategori: "Mountain Style",
        price: 2650000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["40", "41", "42", "43"]
    },
    {
        id: 13,
        nama: "La Sportiva-Tarantulace",
        kategori: "Mountain Style",
        price: 3100000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["39", "40", "41", "42"]
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
        size: ["39", "40", "41"]
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
        size: ["38", "39", "40"]
    },
    {
        id: 18,
        nama: "Under Armour-HOVR",
        kategori: "Sport",
        price: 1950000,
        image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
        size: ["40", "41", "42"]
    },
    {
        id: 19,
        nama: "Keen-Targhee",
        kategori: "Mountain Style",
        price: 2400000,
        image: "asset/image-product/hiking-boot-svgrepo-com.svg",
        size: ["41", "42", "43"]
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

function showProduct() {
    const templateCard = document.getElementById("card-katalog-template");
    const containerCard = document.querySelector(".container-grid");

    fetch_dummy(templateCard,containerCard);
    filterProduct();

}

showProduct();

function fetch_dummy(template,container) {
    data_product.forEach(element => {
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