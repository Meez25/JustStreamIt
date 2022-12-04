import queryDetail from "./queryDetail.js";
import formatModalData from "./formatModalData.js";

export default async function getDataForModal() {
    const mapFilmDetail = new Map();
    const formattedMapFilmDetail = new Map();
    const filmToQuery = document.querySelectorAll('[film-id]');
    // Here we can't use forEach because it's not compatible with Promises.
    for (let i = 0; i < filmToQuery.length; i++) {
        const filmId = filmToQuery[i].getAttribute('film-id');
        const filmDetail = await queryDetail(filmId);
        mapFilmDetail.set(filmId, filmDetail);
        formattedMapFilmDetail.set(filmId, formatModalData(filmDetail));
    }

    // await timeout(2000);
    console.log(formattedMapFilmDetail);
    return formattedMapFilmDetail;
}

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}