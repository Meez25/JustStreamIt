import "./index.scss";
import retrieveContent from './query.js';
import carousel from './carousel.js';

async function showContent() {
    const ul_best_movie_list = document.getElementById("slides-container-best-movie-list");
    try {
        const content = await retrieveContent();
        console.log(content);
        const result = content.results;
        console.log(result);
        for (var i = 0; i < result.length; i++) {
            console.log(result[i])
            // Parse the content and add it to the list of movies
            let li = document.createElement("li");
            li.classList.add("slide");
            let img = document.createElement("img");
            img.src = result[i].image_url;
            console.log(result[i].image_url);
            li.appendChild(img);
            ul_best_movie_list.appendChild(li);
        }

    } catch (e) {
        console.log('Error', e);
    }
}

showContent();
carousel();