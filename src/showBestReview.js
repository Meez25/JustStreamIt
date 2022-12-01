
import retrieveBestReview from './query.js';
import createFilmList from './createFilmList.js';
import queryDetail from './queryDetail.js';
import showBestMovie from './showBestMovie.js';

export default async function showBestReview() {

    const ulBestMovieList = document.getElementById("slides-container-best-movie-list");
    try {
        const contentPage1 = await retrieveBestReview(1);
        const result1 = contentPage1.results;
        // shift() to remove the first movie which is displayed above
        const bestFilmID = result1.shift().id;
        try {
            // Use the first movie to get more detail
            const responseDetail = await queryDetail(bestFilmID);
            showBestMovie(responseDetail);
        }
        catch (e) {
            console.log('Error', e);
        }
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