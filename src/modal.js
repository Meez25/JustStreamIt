export default function createModal() {
    const modals = document.querySelectorAll('[data-modal]');
    modals.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            console.log(trigger);
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