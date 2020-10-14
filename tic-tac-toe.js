let playMessage;
let playerTurn;

window.addEventListener('load', () => {
    playMessage = document.querySelector('#status').innerText;

    document.querySelector('.btn').addEventListener('click', newGame);
});

function newGame() {
    const squares = document.querySelectorAll('#board > div');
    const status = document.querySelector('#status');

    playerTurn = 'X';
    status.classList = [];
    status.innerText = playMessage;

    for (let square of squares) {
        square.classList = [];
        square.classList.add('square');
        square.innerText = '';

        square.onmouseover = function() { this.classList.add('hover'); };
        square.onmouseout = function() { this.classList.remove('hover'); };
        square.addEventListener('click', clickHandler, { once: true });
    }
}

function clickHandler() {
    const status = document.querySelector('#status');

    this.innerText = playerTurn;
    this.classList.add(playerTurn);

    playerTurn = playerTurn === 'X' ? 'O' : 'X';
}
