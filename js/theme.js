let theme = "light";

const button = document.getElementById("theme");
const root = document.querySelector(':root');

button.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";

    switch (theme) {
        case "light":
            root.style.setProperty("--color-black", "#000000")
            root.style.setProperty("--color-white", "#ffffff")
            button.setAttribute("src", "./assets/icons/Solid/General/Moon.svg");
            break;

        case "dark":
            root.style.setProperty("--color-black", "#ffffff");
            root.style.setProperty("--color-white", "#000000");
            button.setAttribute("src", "./assets/icons/Solid/General/Sun.svg");
            break;
    }
});

export default "theme"