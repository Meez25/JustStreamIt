import "./index.scss";
import retrieveBestReview from './query.js';
import carousel from './carousel.js';

async function showContent() {
    const ul_best_movie_list = document.getElementById("slides-container-best-movie-list");
    try {
        const content_page_1 = await retrieveBestReview(1);
        const result1 = content_page_1.results;
        // shift() to remove the first movie which is displayed above
        result1.shift();
        createFilmList(result1, ul_best_movie_list);
        // Now the second page is queried and displayed
        const content_page_2 = await retrieveBestReview(2);
        const result2 = content_page_2.results;
        createFilmList(result2, ul_best_movie_list);
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

showContent();
carousel();