export default function carousel(divCarouselClassName) {
    const carousel = document.querySelector("." + divCarouselClassName);
    const slidesContainer = carousel.getElementsByClassName("slides-container")[0];
    const prevButton = carousel.getElementsByClassName("slide-arrow-left")[0];
    const nextButton = carousel.getElementsByClassName("slide-arrow-right")[0];

    nextButton.addEventListener("click", () => {
        const slide = document.querySelector(".slide");
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
        const slide = document.querySelector(".slide");
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });

}
