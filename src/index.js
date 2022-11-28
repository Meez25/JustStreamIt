import "./index.scss";
import carousel from './carousel.js';
import retrieveContent from './query.js';

async function showContent() {
    try {
        const content = await retrieveContent();

        let elt = document.createElement('div');
        elt.innerHTML = content.join('<br />');

        document.getElementsByTagName('body')[0].appendChild(elt);
    } catch (e) {
        console.log('Error', e);
    }
}

// showContent();

function test() {
    let toto = document.getElementsByClassName('left-best-movie')
    console.log(toto[0].innerHTML)
    toto[0].addEventListener('mousemove', function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        console.log(x)
        console.log(y)
    })
}
// test();
carousel();