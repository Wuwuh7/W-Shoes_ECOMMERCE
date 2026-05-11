let data_product = [
  {
    id: 1,
    nama: "Ardiles-10 pro",
    kategori: "Sport",
    price: 1500000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["39", "40", "41", "42", "43"],
  },
  {
    id: 2,
    nama: "Eiger-Raptor",
    kategori: "Mountain Style",
    price: 2500000,
    image: "asset/image-product/hiking-boot-svgrepo-com.svg",
    size: ["42", "43", "44"],
  },
  {
    id: 3,
    nama: "Nike-Air Max",
    kategori: "Sport",
    price: 1800000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["38", "39", "40", "41", "42"],
  },
  {
    id: 4,
    nama: "Adidas-Predator",
    kategori: "Sport",
    price: 2200000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["42", "43", "44"],
  },
  {
    id: 5,
    nama: "Reebok-Nano",
    kategori: "Sport",
    price: 1600000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["38", "39", "40"],
  },
  {
    id: 6,
    nama: "New Balance-Fresh Foam",
    kategori: "Sport",
    price: 1750000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["41", "42", "43", "44"],
  },
  {
    id: 7,
    nama: "Converse-Chuck Taylor",
    kategori: "Sport",
    price: 850000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["38", "39", "40", "41"],
  },
  {
    id: 8,
    nama: "Vans-Old Skool",
    kategori: "Sport",
    price: 950000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["38", "39", "40", "41"],
  },
  {
    id: 9,
    nama: "Puma-Suede",
    kategori: "Sport",
    price: 1100000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["38", "39", "40", "41"],
  },
  {
    id: 10,
    nama: "Asics-Gel-Kayano",
    kategori: "Sport",
    price: 1900000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["40", "41", "42", "43", "44"],
  },
  {
    id: 11,
    nama: "Salomon-Speedcross",
    kategori: "Mountain Style",
    price: 2800000,
    image: "asset/image-product/hiking-boot-svgrepo-com.svg",
    size: ["42", "43", "44"],
  },
  {
    id: 12,
    nama: "Merrell-Moab",
    kategori: "Mountain Style",
    price: 2650000,
    image: "asset/image-product/hiking-boot-svgrepo-com.svg",
    size: ["41", "42", "43"],
  },
  {
    id: 13,
    nama: "La Sportiva-Tarantulace",
    kategori: "Mountain Style",
    price: 3100000,
    image: "asset/image-product/hiking-boot-svgrepo-com.svg",
    size: ["39", "40", "41"],
  },
  {
    id: 14,
    nama: "Bata-Professional",
    kategori: "Professional",
    price: 750000,
    image: "asset/image-product/mans-shoe-svgrepo-com.svg",
    size: ["39", "40", "41", "42", "43"],
  },
  {
    id: 15,
    nama: "Clarks-Desert Boot",
    kategori: "Professional",
    price: 1600000,
    image: "asset/image-product/mans-shoe-svgrepo-com.svg",
    size: ["38", "39", "40"],
  },
  {
    id: 16,
    nama: "Dr. Martens-1460",
    kategori: "Professional",
    price: 2100000,
    image: "asset/image-product/mans-shoe-svgrepo-com.svg",
    size: ["38", "39", "40", "41", "42"],
  },
  {
    id: 17,
    nama: "Fila-Disruptor",
    kategori: "Sport",
    price: 1050000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["39", "40", "41"],
  },
  {
    id: 18,
    nama: "Under Armour-HOVR",
    kategori: "Sport",
    price: 1950000,
    image: "asset/image-product/footwear-soccer-svgrepo-com.svg",
    size: ["42", "43", "44"],
  },
  {
    id: 19,
    nama: "Keen-Targhee",
    kategori: "Mountain Style",
    price: 2400000,
    image: "asset/image-product/hiking-boot-svgrepo-com.svg",
    size: ["42", "43", "44"],
  },
  {
    id: 20,
    nama: "Hush Puppies-Expert",
    kategori: "Professional",
    price: 1300000,
    image: "asset/image-product/mans-shoe-svgrepo-com.svg",
    size: ["39", "40", "41", "42"],
  },
];
let link_banner = [
  "asset/aset-banner/banner1.jpg",
  "asset/aset-banner/banner2.jpg",
  "asset/aset-banner/banner3.jpg",
];

let comments = [
  {
    id: 1,
    nama: "Prabowo",
    rating: 5,
    comment:
      "Saya sangat senang dengan produk ini, terlebih sepatu gunung nya yang kuat untuk mendaki",
  },
  {
    id: 2,
    nama: "Gibran",
    rating: 4,
    comment:
      "Sepatu sportnya nyaman banget buat lari pagi. Desainnya juga keren!",
  },
  {
    id: 3,
    nama: "Jokowi",
    rating: 5,
    comment:
      "Kualitas sepatu professionalnya tidak diragukan lagi. Terlihat sangat premium dan kokoh. Pengiriman juga cepat.",
  },
];

let cart = loadCart();
function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function reuseCart(newCart) {
  cart = newCart;
}

function saveStorage() {
  return localStorage.setItem("cart", JSON.stringify(cart));
}

export { data_product, link_banner, comments, cart, reuseCart, saveStorage };
