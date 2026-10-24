
const products = [
    {
        id: 1,
        name: "Savings Account",
        category: "Savings",
        status: "Active",
        metric1: "Balance: ₹85,000",
        metric2: "Interest Rate: 3.5% p.a.",
        buttonText: "View Details"
    },
    {
        id: 2,
        name: "Platinum Credit Card",
        category: "Credit Card",
        status: "Active",
        metric1: "Available Limit: ₹40,000",
        metric2: "Next Due Date: 05 Nov 2026",
        buttonText: "View Details"
    },
    {
        id: 3,
        name: "Personal Loan",
        category: "Loan",
        status: "Eligible",
        metric1: "Loan Amount: ₹2,00,000",
        metric2: "Interest Rate: 12% p.a.",
        buttonText: "Apply"
    },
    {
        id: 4,
        name: "Investment Plan",
        category: "Wealth",
        status: "Active",
        metric1: "Investment Value: ₹25,000",
        metric2: "Type: Mutual Fund",
        buttonText: "View Details"
    }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(productList) {
    productContainer.innerHTML = "";

    productList.forEach(function(product) {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Status: ${product.status}</p>
            <p>${product.metric1}</p>
            <p>${product.metric2}</p>
            <button onclick="viewDetails(${product.id})">
                ${product.buttonText}
            </button>
        `;

        productContainer.appendChild(card);
    });
}

displayProducts(products);

function filterProducts(category) {
    const filteredProducts = category === "All"
        ? products
        : products.filter(function(product) {
            return product.category === category;
        });

    displayProducts(filteredProducts);
}

document.getElementById("searchInput").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.status.toLowerCase().includes(searchText)
        );
    });

    displayProducts(filteredProducts);
});

function viewDetails(productId) {
    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) return;

    alert(
        "Product: " + product.name +
        "\nCategory: " + product.category +
        "\nStatus: " + product.status +
        "\n" + product.metric1 +
        "\n" + product.metric2
    );
}





