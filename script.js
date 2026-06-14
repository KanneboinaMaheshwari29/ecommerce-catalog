const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: "$120",
        image: "images/product1.webp"
    },

    {
        id: 2,
        name: "Running Shoes",
        price: "$90",
        image: "images/product2.avif"
    },

    {
        id: 3,
        name: "Smart Watch",
        price: "$150",
        image: "images/product4.jpg"
    },

    {
        id: 4,
        name: "Gaming Laptop",
        price: "$999",
        image: "images/product3.avif"
    }

];

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const cartCount =
    document.getElementById("cartCount");

let cart = 0;

/* DISPLAY PRODUCTS */

function displayProducts(items) {

    productGrid.innerHTML = "";

    items.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.price}</p>

                <button onclick="addToCart()">
                    Add to Cart
                </button>

            </div>
        `;

        productGrid.appendChild(card);

    });

}

/* SEARCH */

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const filtered =
        products.filter(product =>
            product.name.toLowerCase().includes(value)
        );

    displayProducts(filtered);

});

/* CART */

function addToCart() {

    cart++;

    cartCount.textContent = cart;

}

/* INITIAL LOAD */

displayProducts(products);