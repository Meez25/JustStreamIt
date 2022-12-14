import getDataForModal from "./dataModal.js";
import updateModal from "./updateModal.js";

export default async function createModal() {
    const images = document.querySelectorAll('[data-modal]');
    // getDataForModal runs asynchronously to get the data
    const formattedMapFilmDetail = getDataForModal();

    images.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            const filmID = trigger.getAttribute('film-id');
            try {
                // Wait for the data to be loaded to update the modal
                Promise.race([formattedMapFilmDetail]).then((values) => {
                    updateModal(values, filmID);
                    console.log("loading finished!")
                })
            } catch (e) {
                console.log(e);
            }
            event.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add('open');
            const exits = modal.querySelectorAll('.modal-exit');
            exits.forEach(function (exit) {
                exit.addEventListener('click', function (event) {
                    event.preventDefault();
                    modal.classList.remove('open');
                });
            });
        });
    });
}