export default function carousel(divCarouselClassName) {
    const carousel = document.querySelector("." + divCarouselClassName);
    const slidesContainer = carousel.getElementsByClassName("slides-container")[0];
    const prevButton = carousel.getElementsByClassName("slide-arrow-left")[0];
    const nextButton = carousel.getElementsByClassName("slide-arrow-right")[0];
    // scrollLeft 0 to reset the scrolling position
    console.log(slidesContainer)
    console.log("before : " + slidesContainer.scrollLeft)
    slidesContainer.scrollLeft = 0;
    console.log("after : " + slidesContainer.scrollLeft)

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
