const hamburger = document.querySelector<HTMLButtonElement>('.hamburger');
const navList = document.querySelector<HTMLUListElement>('.nav-list');

if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}