let playMessage;

window.addEventListener('load', () => {
    playMessage = document.querySelector('#status').innerText;

    document.querySelector('.btn').addEventListener('click', newGame);
});

function newGame() {
    const squares = document.querySelectorAll('#board > div');
    const status = document.querySelector('#status');

    status.innerText = playMessage;

    for (let square of squares) {
        square.classList.add('square');
        square.innerText = '';

        square.addEventListener('click', clickHandler, { once: true });
    }
}

function clickHandler() {
    const status = document.querySelector('#status');
}
