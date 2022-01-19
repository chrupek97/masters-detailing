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
            }
        })
    }, options)
}

document.addEventListener("DOMContentLoaded", () => {
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
});