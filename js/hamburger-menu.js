let menuState = false;

const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
    menuState = !menuState;

    if (menuState)
        hamburgerMenu.style.display = "flex"
    else {
        hamburgerMenu.style.display = "none";
    }
});

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
});

export default "hamburger-menu";