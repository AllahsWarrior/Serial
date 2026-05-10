const loadScreen = document.getElementById("loadScreen");
const animatedBlocks = document.querySelectorAll(".fadeIn");

const unlock = () => {
    document.body.classList.remove("locked");
    loadScreen.classList.add("hidden");
};

window.addEventListener("load", () => {
    setTimeout(unlock, 650);
});

setTimeout(unlock, 2200);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

animatedBlocks.forEach((element) => observer.observe(element));
