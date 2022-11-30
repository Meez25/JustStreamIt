export default function carousel() {
    const slidesContainer = document.getElementById("slides-container-best-movie-list");
    const prevButton = document.getElementById("slide-arrow-prev-best-movie-list");
    const nextButton = document.getElementById("slide-arrow-next-best-movie-list");

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
