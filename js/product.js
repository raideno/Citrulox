let product_quantity = 1;

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

export default "product";