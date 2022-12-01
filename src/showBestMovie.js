export default function showBestMovie(bestMovieJson) {
    const bestMovieDiv = document.querySelector(".best-movie");
    const bestMovieTitle = bestMovieDiv.getElementsByTagName("h1");
    bestMovieTitle[0].textContent = bestMovieJson.title;
    const bestMovieDescription = bestMovieDiv.getElementsByTagName("p");
    bestMovieDescription[0].textContent = bestMovieJson.description;
    const bestMovieImage = bestMovieDiv.getElementsByTagName("img");
    bestMovieImage[0].src = bestMovieJson.image_url;
}