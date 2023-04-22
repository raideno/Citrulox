const categories = {
    "peanut-butter": {
        name: "Peanut Butter",
        description: "",
        products: [
            {
                subname: "Original Taste",
                name: "Red Peanut Butter",
                image: "./assets/peanut-butter-red.png",
                description: "",
                price: 1440,
            },
            {
                subname: "Lemonade Taste",
                name: "Orange Peanut Butter",
                image: "./assets/peanut-butter-orange.png",
                description: "",
                price: 2000,
            },
            {
                subname: "Hazelnut Taste",
                name: "Brown Peanut Butter",
                image: "./assets/peanut-butter-brown.png",
                description: "",
                price: 1950,
            },
        ]
    },
    "granolas": {
        name: "Granolas",
        description: "",
        products: []
    },
    "avoine": {
        name: "Avoine",
        description: "",
        products: []
    },
    "proteines": {
        name: "Proteines",
        description: "",
        products: []
    },
    "complements": {
        name: "Complements",
        description: "",
        products: []
    },
}

const productsCategories = document.getElementById("products-categories");

for (const key in categories) {
    const category = categories[key];

    const htmlCategory = document.createElement("div");

    htmlCategory.className = "products-category";
    htmlCategory.innerText = category.name;

    /*TODO: change the products */
    htmlCategory.addEventListener("click", () => {
        Array.from(productsCategories.children).forEach((child) => child.classList.remove("products-category-active"));
        htmlCategory.classList.add("products-category-active");
    });

    if (key === "peanut-butter")
        htmlCategory.classList.add("products-category-active");

    productsCategories.appendChild(htmlCategory);
}



export default "products-slide"