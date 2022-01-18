toggleMenuListener = () => {
    const toggleMenuLinksBox = document.querySelector(".toggle-menu__links ul");
    toggleMenuLinksBox.classList.toggle("d-flex");
}


document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.addEventListener("click", toggleMenuListener);
});