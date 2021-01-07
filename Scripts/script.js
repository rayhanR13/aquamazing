const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLi = document.querySelectorAll('.nav-link li');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    navLi.forEach(li => {
        li.classList.toggle('fade');
    });
});