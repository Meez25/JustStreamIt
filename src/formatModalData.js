export default function formatModalData(filmDetail) {

    filmDetail.duration = formatDuration(filmDetail.duration);
    filmDetail.genres = formatGenre(filmDetail.genres);
    filmDetail.actors = formatActors(filmDetail.actors);
    filmDetail.countries = formatCountry(filmDetail.countries);
    filmDetail.worldwide_gross_income = formatBoxOffice(filmDetail.worldwide_gross_income);

    return filmDetail;
}

function formatDuration(duration) {
    if (!duration) {
        return '';
    }
    else {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return hours + 'h' + minutes
    }
}

function formatGenre(genre) {
    return genre.join(", ");
}

function formatActors(actors) {
    return actors.join(", ");
}
function formatCountry(country) {
    return country.join(", ");
}
function formatBoxOffice(boxOffice) {
    if (!boxOffice) {
        return "-";
    } else {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        return formatter.format(boxOffice);
    }
}