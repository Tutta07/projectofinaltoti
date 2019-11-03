const toggle = document.querySelector("#toggle-menu");
toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector("#menu-items");
    menu.classList.toggle("visible");
}