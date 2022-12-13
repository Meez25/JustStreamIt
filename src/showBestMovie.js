export default function showBestMovie(bestMovieJson) {
    const leftBestMovie = document.querySelector(".left-best-movie");
    const bestMovieTitle = document.createElement("h1");
    bestMovieTitle.textContent = bestMovieJson.title;
    leftBestMovie.prepend(bestMovieTitle);
    const bestMovieDiv = document.querySelector(".best-movie");
    const bestMovieDescription = bestMovieDiv.getElementsByTagName("p");
    bestMovieDescription[0].textContent = bestMovieJson.description;
    const bestMovieImage = bestMovieDiv.getElementsByTagName("img");
    bestMovieImage[0].src = bestMovieJson.image_url;
    bestMovieImage[0].setAttribute("film-id", bestMovieJson.id);
}