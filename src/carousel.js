export default function carousel(divCarouselClassName) {
    const carousel = document.querySelector("." + divCarouselClassName);
    const slidesContainer = carousel.getElementsByClassName("slides-container")[0];
    const prevButton = carousel.getElementsByClassName("slide-arrow-left")[0];
    const nextButton = carousel.getElementsByClassName("slide-arrow-right")[0];
    // scrollLeft 0 to reset the scrolling position
    slidesContainer.scrollLeft = 0;

    nextButton.addEventListener("click", () => {
        const slide = document.querySelector(".slide");
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        console.log("ScrollLeft = " + slidesContainer.scrollLeft);
        if (slidesContainer.scrollLeft == 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }
    });

    prevButton.addEventListener("click", () => {
        const slide = document.querySelector(".slide");
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        console.log("ScrollLeft = " + slidesContainer.scrollLeft);
        console.log(slidesContainer)
        if (slidesContainer.scrollLeft == slidesContainer.scrollLeftMax) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    });

}
