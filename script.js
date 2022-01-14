toggleMenuListener = () => {
    const toggleMenuLinksBox = document.querySelector(".toggle-menu__links ul");
    toggleMenuLinksBox.classList.toggle("d-flex");
    console.log(toggleMenuLinksBox)
}

initAnimationObserver = () => {
    const options = {
        rootMargin: "0px 0px 0px 0px"
    };

    return new IntersectionObserver((entries, animationObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                animationObserver.unobserve(entry.target);
                console.log(entry.target.classList)
            }
        })
    }, options)
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggle-menu");
    const mainSectionDescriptionBox = document.querySelector(".main-section__description");
    const aboutUsBox = document.querySelector("#about-us");
    const offerBox = document.querySelector("#offer");
    const contactBox = document.querySelector("#contact");
    const priceListBox = document.querySelector("#price-list");
    const projectItemsBox = document.querySelectorAll(".projects-box div");

    const animationObserver = initAnimationObserver();
    animationObserver.observe(mainSectionDescriptionBox);
    animationObserver.observe(aboutUsBox);
    animationObserver.observe(offerBox);
    animationObserver.observe(priceListBox);
    animationObserver.observe(contactBox);

    for (let i = 0; i < projectItemsBox.length; i++) {
        animationObserver.observe(projectItemsBox[i]);
    }

    toggleMenu.addEventListener("click", toggleMenuListener);
});