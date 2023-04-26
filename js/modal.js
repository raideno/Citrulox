const modals = [];

const modalsContainer = document.getElementById("modals");

/**synchronize the modal array with the screen modals */
export const refreshModals = () => {

}

export const removeModal = (modalId) => {

}

/**add a modal to the array */
export const createModal = (modalText) => {
    const htmlModal = document.createElement("div");

    htmlModal.classList.add("modal");
    htmlModal.innerText = modalText;

    modalsContainer.appendChild(htmlModal);
}

export default "modal";