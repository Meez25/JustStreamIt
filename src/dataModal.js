import queryDetail from "./queryDetail.js";
import formatModalData from "./formatModalData.js";

export default async function getDataForModal() {
    const mapFilmDetail = new Map();
    const formattedMapFilmDetail = new Map();
    const filmToQuery = document.querySelectorAll('[film-id]');
    filmToQuery.forEach(async function (film) {
        const filmID = film.getAttribute('film-id');
        try {
            const filmDetail = await queryDetail(filmID);
            mapFilmDetail.set(filmID, filmDetail);
            // Create a formatted copy of the received Map object
            formattedMapFilmDetail.set(filmID, formatModalData(filmDetail))
        } catch (e) {
            console.log(e);
        }
    })
    await timeout(2000);
    console.log("Waited 2 seconds");
    return formattedMapFilmDetail;
}

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}