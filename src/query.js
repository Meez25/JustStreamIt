
export default async function retrieveBestReview(n_page) {
    const url = "http://127.0.0.1:8000/api/v1/titles/?page=" + n_page + "&sort_by=-imdb_score";
    const response = await fetch(url);
    return response.json();
}
