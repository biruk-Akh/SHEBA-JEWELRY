const products = [
  {
    id: 1,
    name: "Gold Ring",
    price: "$299",
    image: "images/gold-ring.jpg",
    category: "gold"
  },
  {
    id: 2,
    name: "Silver Necklace",
    price: "$149",
    image: "images/silver-necklace.jpg",
    category: "silver"
  },
  // Add more products here
];

let cartCount = 0;

function renderProducts(category = "all") {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.filter(p => category === "all" || p.category === category)
          .forEach(product => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(el);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

function filterProducts(category) {
  renderProducts(category);
}

// Initialize
renderProducts();
