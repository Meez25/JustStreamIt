export default function updateModal(mapFilmDetail, filmID) {
    const modal = document.getElementsByClassName("modal-container")[0];
    const img = document.getElementsByClassName("image")[0];
    const title = modal.getElementsByClassName("title")[0];
    const duration = modal.getElementsByClassName("duration")[0];
    const category = modal.getElementsByClassName("category")[0];
    const releaseDate = modal.getElementsByClassName("release-date")[0];
    const country = modal.getElementsByClassName("country")[0];
    const director = modal.getElementsByClassName("director")[0];
    const actors = modal.getElementsByClassName("actors")[0];
    const rank = modal.getElementsByClassName("rank")[0];
    const imdb = modal.getElementsByClassName("imdb")[0];
    const income = modal.getElementsByClassName("income")[0];
    const summary = modal.getElementsByClassName("summary")[0];

    console.log(mapFilmDetail);
    const clickedMovie = mapFilmDetail.get(filmID);
    console.log(clickedMovie);
    title.innerHTML = clickedMovie.title;
    img.src = clickedMovie.image_url;
    duration.innerHTML = clickedMovie.duration;
    category.innerHTML = clickedMovie.genres;
    releaseDate.innerHTML = clickedMovie.year;
    country.innerHTML = clickedMovie.countries;
    director.innerHTML = clickedMovie.directors;
    actors.innerHTML = clickedMovie.actors;
    rank.innerHTML = clickedMovie.rated;
    imdb.innerHTML = clickedMovie.imdb_score;
    income.innerHTML = clickedMovie.worldwide_gross_income;
    summary.innerHTML = clickedMovie.long_description;
}

/*
    L’image de la pochette du film
    Le Titre du film
    Le genre complet du film
    Sa date de sortie
    Son Rated
    Son score Imdb
    Son réalisateur
    La liste des acteurs
    Sa durée
    Le pays d’origine
    Le résultat au Box Office
    Le résumé du film

*/