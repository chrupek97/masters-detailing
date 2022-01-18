let currentNumImage = 1;
let directory = "";

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

prevImage = (maxNum) => {
    const currentImageBox = document.querySelector(".modal-dialog__current-image");

    let isFirst = currentNumImage == 1;
    currentNumImage--;

    isFirst ? currentNumImage = maxNum : currentNumImage;

    currentImageBox.classList.remove("appear");
    setTimeout(() => {
        currentImageBox.classList.remove("no-appear");
        changeImage();
    }, 500);
}

nextImage = (maxNum) => {
    const currentImageBox = document.querySelector(".modal-dialog__current-image");
    let isLast = currentNumImage == maxNum;
    currentNumImage++;

    isLast ? currentNumImage = 1 : currentNumImage = currentNumImage;

    currentImageBox.classList.remove("appear");
    setTimeout(() => {
        currentImageBox.classList.remove("no-appear");
        changeImage();
    }, 500);
}

changeImage = () => {
    const currentImageBox = document.querySelector(".modal-dialog__current-image");
    currentImageBox.src = `./images/${directory}/${currentNumImage}.jpg`;

    currentImageBox.classList.add("no-appear");
    setTimeout(() => {
        currentImageBox.classList.add("appear");
    }, 0);
}

setImages = (dir, imgNumber) => {
    const modalDialog = document.querySelector(".modal-dialog");
    const allImagesBox = document.querySelector(".modal-dialog__all-images");
    allImagesBox.textContent = "";
    const closeButton = document.querySelector(".close-button");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    currentNumImage = 1;
    directory = dir;

    changeOpacity(0.3);
    closeButton.addEventListener("click", () => {
        modalDialog.classList.remove("appear");

        setTimeout(() => {
            changeOpacity(1);
            modalDialog.classList.add("d-none");
        }, 500)
        
        prevButton.replaceWith(prevButton.cloneNode(true));
        nextButton.replaceWith(nextButton.cloneNode(true));
    });

    prevButton.addEventListener("click", () => {
        prevImage(imgNumber);
    });

    nextButton.addEventListener("click", () => {
        nextImage(imgNumber);
    })

    modalDialog.classList.remove("d-none");
    setTimeout(() => modalDialog.classList.add("appear"), 0);

    changeImage();

    for (let i = 1; i <= imgNumber; i++) {
        const img = document.createElement("img");
        img.src = `./images/${directory}/${i}.jpg`;

        allImagesBox.appendChild(img);
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