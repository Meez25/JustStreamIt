import "./index.scss";
import carousel from './carousel.js';
import showBestReview from './showBestReview.js';
import showCategory from './showCategory.js';

showBestReview();
showCategory("slides-container-cat1-movie-list", "sci-fi");
showCategory("slides-container-cat2-movie-list", "sport");
showCategory("slides-container-cat3-movie-list", "thriller");
carousel("carousel-best-movie-list");
carousel("category-1");
carousel("category-2");
carousel("category-3");