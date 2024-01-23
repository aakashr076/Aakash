document.addEventListener("DOMContentLoaded", function () {
    const laptopsContainer = document.getElementById("laptops");
    const categoryFilter = document.getElementById("categoryFilter");

    // Example laptop data with categories
    const laptops = [
        {
            id: "laptop1",
            name: "Victus Gaming Laptop",
            Price: "₹49,000",
            category: "gaming",
            image: "gaming_laptop1.jpg",
            specifications: "",
            buyLink: "https://gaming_laptop1"
        },
        {
            id: "laptop1",
            name: "Apple Macbook Air",
            Price: "₹1,49,000",
            category: "business",
            image: "business_laptop1.jpg",
            specifications: "",
            buyLink: "https://business_laptop1"
        },
        // Add more laptop objects as needed
    ];
    
    // Function to handle search
    function searchProducts() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const filteredLaptops = laptops.filter(laptop =>
            laptop.name.toLowerCase().includes(searchInput) ||
            laptop.description.toLowerCase().includes(searchInput)
        );

        renderLaptops("all"); // Reset the display
        renderLaptops(filteredLaptops); // Display the filtered laptops
    }
    
    // Add laptops to the page
    function renderLaptops(selectedCategory) {
        laptopsContainer.innerHTML = "";

        laptops
            .filter(laptop => selectedCategory === "all" || laptop.category === selectedCategory)
            .forEach(laptop => {
                const card = document.createElement("div");
                card.classList.add("laptop-card");
                card.id = laptop.id;
        
                card.innerHTML = `
                    <img src="${laptop.image}" alt="${laptop.name}">
                    <h2>${laptop.name}</h2>
                    <p>${laptop.Price}<p>
                    <p>${laptop.specifications}</p>
                    <a href="${laptop.buyLink}" class="buy-now-button">Buy Now</a>
                `;
        
                laptopsContainer.appendChild(card);
        
                // Add click/tap event listener to each card
                card.addEventListener("click", function () {
                    // You can replace this with your logic to display more details
                    alert(`Details for ${laptop.name}:\n${laptop.specifications}`);
                });
            });
        };

    // Populate category filter and render laptops initially
    const categories = ["gaming", "business"]; // Add more categories as needed
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
        categoryFilter.appendChild(option);
    });

    categoryFilter.addEventListener("change", function () {
        renderLaptops(categoryFilter.value);
    });

    // Initial render with all laptops
    renderLaptops("all");
});

