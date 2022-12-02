import queryDetail from "./queryDetail";

export default async function getDataForModal() {
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
    await timeout(10000);
    console.log("Waited 10 seconds")
    return mapFilmDetail;
}

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}