
export default function createFilmList(result, ul_to_append) {
    for (var i = 0; i < result.length; i++) {
        // Parse the content and add it to the list of movies
        let li = document.createElement("li");
        li.classList.add("slide");
        let img = document.createElement("img");
        img.src = result[i].image_url;
        li.appendChild(img);
        ul_to_append.appendChild(li);
    }

}