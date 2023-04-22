const sections = Array.from(document.getElementsByTagName("section"));
const links = Array.from(document.getElementById("nav-links"));

document.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        const isVisible = isInViewPort(section);
        links.forEach((link) => link)
        if (isVisible)
            links[index].classList.add("nav-link-active");
    });

});

const isInViewPort = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default "header";