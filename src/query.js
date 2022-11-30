
export default async function retrieveContent() {
    const url = "http://127.0.0.1:8000/api/v1/titles/?page=1&sort_by=-imdb_score";

    const response = await fetch(url);
    return response.json();
}
