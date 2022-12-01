import retrieveBestReview from "./query";
import createFilmList from "./createFilmList";

export default async function showCategory(ulID, genre) {
    const ulFirstCategory = document.getElementById(ulID);
    try {
        const contentPage1 = await retrieveBestReview(1, genre);
        const result1 = contentPage1.results;
        createFilmList(result1, ulFirstCategory);

        const contentPage2 = await retrieveBestReview(2, genre);
        const result2 = contentPage2.results;
        result2.pop()
        result2.pop()
        result2.pop()
        createFilmList(result2, ulFirstCategory);

    } catch (e) {
        console.log('Error', e);
    }
}