export default function resetCarouselScroll() {
    const body = document.body;
    body.onload = function () {
        console.log("Onload")
        const carouselList = document.getElementsByClassName('slides-container');
        console.log(carouselList)
        for (let i = 0; i < carouselList.length; i++) {
            console.log(carouselList[i].scrollLeft)
            carouselList[i].scrollLeft = 0;
        }
    }
}