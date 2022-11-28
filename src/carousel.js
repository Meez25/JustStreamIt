function carousel() {
    const carouselContainer = document.querySelector(".category-1 > .carousel");
    const slides = document.querySelectorAll('.category-1 > .carousel > .movie-container');
    const next = document.querySelector('.category-1 > .carousel > .right');
    const prev = document.querySelector('.category-1 > .carousel > .left');
    let counter = 1;
    const size = slides[0].clientWidth;
    carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';
    next.addEventListener('click', () => {
        if (counter >= slides.length) return;
        carouselContainer.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';
    });
    prev.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselContainer.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';
    });
    carouselContainer.addEventListener('transitionend', () => {
        console.log(slides[counter]);
        if (slides[counter].id === 'lastslide') {
            carouselContainer.style.transition = 'none';
            counter = slides.length - 2;
            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
    });
    carouselContainer.addEventListener('transitionend', () => {
        console.log(slides[counter]);
        if (slides[counter].id === 'firstslide') {
            carouselContainer.style.transition = 'none';
            counter = slides.length - counter;
            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
    });
}