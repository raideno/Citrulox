import { addToCart } from "./cart.js";

const add = document.getElementById("product-quantity-add");
const remove = document.getElementById("product-quantity-remove");

const quantity = document.getElementById("product-quantity-value");

add.addEventListener("click", () => {
    let value = parseInt(quantity.innerHTML);

    value++;

    quantity.innerHTML = value;
});

remove.addEventListener("click", () => {
    let value = parseInt(quantity.innerHTML);

    value = value - (value == 1 ? 0 : 1);

    quantity.innerHTML = value;
});

const purchace = document.getElementById("product-cta");

purchace.addEventListener("click", () => {
    addToCart("ID-1", parseInt(quantity.innerText))
})

export default "product";