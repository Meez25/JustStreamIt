import "./index.scss";
import retrieveBestReview from './query.js';
import carousel from './carousel.js';

async function showBestReview() {

    const ulBestMovieList = document.getElementById("slides-container-best-movie-list");
    try {
        const contentPage1 = await retrieveBestReview(1);
        const result1 = contentPage1.results;
        // shift() to remove the first movie which is displayed above
        result1.shift();
        createFilmList(result1, ulBestMovieList);
        // Now the second page is queried and displayed
        const contentPage2 = await retrieveBestReview(2);
        const result2 = contentPage2.results;
        result2.pop()
        result2.pop()
        createFilmList(result2, ulBestMovieList);
    } catch (e) {
        console.log('Error', e);
    }
}

async function showCategory(ulID, genre) {
    const ulFirstCategory = document.getElementById(ulID);
    try {
        const contentPage1 = await retrieveBestReview(1, genre);
        console.log(contentPage1);
        const result1 = contentPage1.results;
        createFilmList(result1, ulFirstCategory);

        const contentPage2 = await retrieveBestReview(2, genre);
        const result2 = contentPage2.results;
        result2.pop()
        result2.pop()
        result2.pop()
        createFilmList(result2, ulFirstCategory);

    } catch (e) {
        console.log('Error', e);
    }
}

function createFilmList(result, ul_to_append) {
    for (var i = 0; i < result.length; i++) {
        // Parse the content and add it to the list of movies
        let li = document.createElement("li");
        li.classList.add("slide");
        let img = document.createElement("img");
        img.src = result[i].image_url;
        li.appendChild(img);
        ul_to_append.appendChild(li);
    }

}

showBestReview();
showCategory("slides-container-cat1-movie-list", "sci-fi");
showCategory("slides-container-cat2-movie-list", "sport");
showCategory("slides-container-cat3-movie-list", "thriller");
carousel("carousel-best-movie-list");
carousel("category-1");
carousel("category-2");
carousel("category-3");