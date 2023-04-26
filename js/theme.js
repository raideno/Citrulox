let theme = localStorage.getItem("theme") || "light";

if (theme === null) {
    localStorage.setItem("theme", "light");
    theme = "light";
}

const button = document.getElementById("theme");
const root = document.querySelector(':root');

const swtichTheme = (theme) => {
    switch (theme) {
        case "light":
            root.style.setProperty("--color-black", "#000000");
            root.style.setProperty("--color-white", "#ffffff");
            button.setAttribute("src", "./assets/icons/Solid/General/Moon.svg");

            Array.from(document.getElementsByClassName("icon-temp")).forEach((e) => e.classList.remove("svg-white"));
            break;

        case "dark":
            root.style.setProperty("--color-black", "#ffffff");
            root.style.setProperty("--color-white", "#000000");
            button.setAttribute("src", "./assets/icons/Solid/General/Sun.svg");

            Array.from(document.getElementsByClassName("icon-temp")).forEach((e) => e.classList.add("svg-white"));
            break;
    }
}

swtichTheme(theme);

button.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", theme);
    swtichTheme(theme);
});


export default "theme"