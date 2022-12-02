import queryDetail from "./queryDetail";

export default function getDataForModal() {
    const mapFilmDetail = new Map();
    const filmToQuery = document.querySelectorAll('[film-id]');
    filmToQuery.forEach(async function (film) {
        const filmID = film.getAttribute('film-id');
        try {
            const filmDetail = await queryDetail(filmID);
            mapFilmDetail.set(filmID, filmDetail);
        } catch (e) {
            console.log(e);
        }
    })
    return mapFilmDetail;
}