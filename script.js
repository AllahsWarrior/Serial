const loader = document.getElementById("loader");
const reveals = document.querySelectorAll(".reveal");

const unlockPage = () => {
    document.body.classList.remove("is-loading");
    loader.classList.add("hide");
};

window.addEventListener("load", () => {
    setTimeout(unlockPage, 650);
});

setTimeout(unlockPage, 2200);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.14 });

reveals.forEach((element) => observer.observe(element));
