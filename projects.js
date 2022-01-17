document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item__img');
    addProjectItemListener(projectItems);
});

changeOpacity = (opacity) => {
    const navBox = document.getElementsByTagName("nav")[0];
    const mainBox = document.getElementsByTagName("main")[0];
    navBox.style.opacity = opacity;
    mainBox.style.opacity = opacity;
}

setImages = (directory, imgNumber) => {
    const modalDialog = document.querySelector(".modal-dialog");
    const imagesBox = document.querySelector(".modal-dialog__images");
    const closeButton = document.querySelector(".close-button");

    changeOpacity(0.3);
    closeButton.addEventListener("click", () => {
        changeOpacity(1);
        modalDialog.classList.add("d-none");
    });

    modalDialog.classList.remove("d-none");

    for (let i = 1; i <= imgNumber; i++) {
        const img = document.createElement("img");
        img.src = `/images/${directory}/${i}.jpg`;

        imagesBox.appendChild(img);
    }
}

addProjectItemListener = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', (e) => {
            const directory = e.target.src.split('images/')[1].split("/1.jpg")[0];
            const imgNumber = e.target.dataset['num']
            setImages(directory, imgNumber);
        });
    }
}