
export default async function queryDetail(ID) {
    const url = "http://127.0.0.1:8000/api/v1/titles/" + ID;
    const response = await fetch(url);
    return response.json();
}