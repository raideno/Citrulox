let menuState = false;

const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
    menuState = !menuState;

    if (menuState)
        hamburgerMenu.animate([{ top: 0 }], { duration: 150, fill: "forwards" });
    else
        hamburgerMenu.animate([{ top: "-100vh" }], { duration: 150, fill: "forwards" });
});

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.animate([{ top: "-100vh" }], { duration: 150, fill: "forwards" });
});

export default "hamburger-menu";