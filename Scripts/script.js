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

// X days ago
const toDate = new Date();
const fromDate = new Date(2021, 0, 1);
const datePart = "d"; // datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'

const daysField = document.querySelector("#x-days-ago");
daysField.innerHTML = xDaysAgo(toDate, fromDate, datePart);

function xDaysAgo(toDate, fromDate, datePart) {
    const diff = toDate - fromDate;
    const divideBy = {
        w: 604800000,
        d: 86400000,
        h: 3600000,
        n: 60000,
        s: 1000,
    };

    return Math.floor(diff / divideBy[datePart]);
}
