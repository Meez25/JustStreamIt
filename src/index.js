import "./index.scss";
import carousel from './carousel.js';
import showBestReview from './showBestReview.js';
import showCategory from './showCategory.js';
import createModal from './modal.js';

const finishedDisplayingBestReview = showBestReview();
const two = showCategory("slides-container-cat1-movie-list", "sci-fi");
const three = showCategory("slides-container-cat2-movie-list", "sport");
const four = showCategory("slides-container-cat3-movie-list", "thriller");


carousel("carousel-best-movie-list");
carousel("category-1");
carousel("category-2");
carousel("category-3");

Promise.all([finishedDisplayingBestReview, two, three, four]).then((values) => {
    const body = document.getElementsByClassName("body")[0];
    const loading = document.getElementsByClassName("middle")[0];
    loading.style.display = "none";
    body.style.display = "inline";
    createModal();
});
