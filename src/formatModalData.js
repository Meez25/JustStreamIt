export default function formatModalData(filmDetail) {

    filmDetail.duration = formatDuration(filmDetail.duration);
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