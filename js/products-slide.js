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
    "avoine": {
        name: "Avoine",
        description: "",
        products: [
            {
                subname: "Lemonade Taste",
                name: "Flocons Marrons",
                image: "./assets/avoine-marron.avif",
                description: "",
                price: 2000,
            },
            {
                subname: "Original Taste",
                name: "Flocon Maxi",
                image: "./assets/avoine-jaune.webp",
                description: "",
                price: 1440,
            },
            {
                subname: "Hazelnut Taste",
                name: "Flocons Jaune",
                image: "./assets/avoine-orange.webp",
                description: "",
                price: 1950,
            },
        ]
    },
    "granolas": {
        name: "Granolas",
        description: "",
        products: [
            {
                subname: "Lemonade Taste",
                name: "Green Granolas",
                image: "./assets/granolas-classic.avif",
                description: "",
                price: 1000,
            },
            {
                subname: "Hazelnut Taste",
                name: "Red Granolas Peanut Butter",
                image: "./assets/granolas-vert.webp",
                description: "",
                price: 1250,
            },
            {
                subname: "Original Taste",
                name: "Yellow Butter",
                image: "./assets/granolas-jsp.webp",
                description: "",
                price: 750,
            },
        ]
    }
}

const productsCategories = document.getElementById("products-categories");

const productsList = document.getElementById("products-list");

const htmlSelectedProduct = {
    name: document.getElementById("product-title"),
    subName: document.getElementById("product-subtitle"),
    price: document.getElementById("product-price"),
}

for (const key in categories) {
    const category = categories[key];

    const htmlCategory = document.createElement("div");

    htmlCategory.className = "products-category";
    htmlCategory.innerText = category.name;

    /*TODO: change the products */
    htmlCategory.addEventListener("click", () => {
        Array.from(productsCategories.children).forEach((child) => child.classList.remove("products-category-active"));
        htmlCategory.classList.add("products-category-active");

        /**
         * when a category is selected
         * 
         * change displayed products
         * add eventListener for each product inorder to change price and stuff
         */

        productsList.innerHTML = "";

        category.products.forEach((product, index) => {
            const htmlProduct = document.createElement("div");

            htmlProduct.classList.add("product");

            const htmlProductImg = document.createElement("img");

            //htmlProductImg.classList.add("product");
            htmlProductImg.setAttribute("src", product.image);
            htmlProductImg.setAttribute("alt", "product-image");
            htmlProductImg.setAttribute("width", "100%");

            htmlProduct.appendChild(htmlProductImg);

            htmlProduct.addEventListener("click", () => {
                /**
                 * change displayed name, subname and price 
                 */

                console.log("change product to", product.name);

                htmlSelectedProduct.name.innerText = product.name;
                htmlSelectedProduct.subName.innerText = product.subname;
                htmlSelectedProduct.price.innerText = product.price;

                Array.from(document.getElementsByClassName("product")).forEach((p) => p.classList.remove("product-active"))

                htmlProduct.classList.add("product-active");

            });

            productsList.appendChild(htmlProduct);
        });

        productsList.children.item(0).click();

    });

    productsCategories.appendChild(htmlCategory);

    productsCategories.children.item(0).click();
}

export default "products-slide"