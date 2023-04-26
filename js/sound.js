const audio = new Audio("../sounds/peanut-butter-sound.mp3");

document.addEventListener("click", () => {
    try {
        //audio.play();
    } catch {
        console.log("[error]: failed to palye audio");
    }
});

export default "de";