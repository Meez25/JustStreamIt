export default function resetCarouselScroll() {
    const carouselList = document.getElementsByClassName('slides-container');
    for (let i = 0; i < carouselList.length; i++) {
        console.log(carouselList[i]);
        console.log(carouselList[i].scrollLeft)
        // Reset the scroll and hide the left arrow
        carouselList[i].style.scrollBehavior = "initial";
        carouselList[i].scrollLeft = 0;
        carouselList[i].style.scrollBehavior = "smooth";
        carouselList[i].parentElement.getElementsByClassName("slide-arrow-left")[0].style.display = "none";
    }
}