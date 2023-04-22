const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector("nav a[href*=" + sectionId + "]").classList.add("nav-link-active");
        } else {
            document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("nav-link-active");
        }
    });
});

export default "header";