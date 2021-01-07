const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLi = document.querySelectorAll(".nav-link li");

const modalContainer = document.querySelector(".modal-container");
const modalFullImg = document.querySelector(".modal-full-img");
const modalImages = document.querySelectorAll(".article-img");

// Responsive hamburger acion
burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    navLi.forEach((li) => {
        li.classList.toggle("fade");
    });
});

// Modal action
modalImages.forEach((image) => {
    image.addEventListener("click", () => {
        modalContainer.classList.add("open");
        modalFullImg.classList.add("open");

        const imgSrc = image.getAttribute("src");
        modalFullImg.src = imgSrc;
    });
});

modalContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-container")) {
        modalContainer.classList.remove("open");
        modalFullImg.classList.remove("open");
    }
});
