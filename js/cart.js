let value = 0;

const cart = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");
const cartValue = document.getElementById("cart-value");

const updateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cartContent))
}

const updateCartValue = () => {
    cartValue.innerText = cartContent.length;
}

let cartContent = JSON.parse(localStorage.getItem("cart"));

/**TODO: check that the type is Array */

if (cartContent === null) {
    localStorage.setItem("cart", JSON.stringify([]));
    cartContent = JSON.parse(localStorage.getItem("cart"));
}

updateCartValue();

export const addToCart = (productId, quantity) => {
    for (let i = 0; i < quantity; i++)
        cartContent.push("-");
    updateLocalStorage();
    updateCartValue();
}

export const removeFromCart = (productId, quantity) => {
    for (let i = 0; i < quantity; i++)
        if (cartContent.length > 0)
            cartContent.splice(0, 1);
    updateLocalStorage();
    updateCartValue();

}



export default "cart";