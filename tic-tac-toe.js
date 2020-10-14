const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

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
    status.innerText = playMessage;

    if (getWinner()) {
        status.innerText = `Congratulations! ${playerTurn} is the Winner!`;
        status.classList.add('you-won');
        document
            .querySelectorAll('#board > div')
            .forEach((el) => el.removeEventListener('click', clickHandler, { once: true }));
    }

    playerTurn = playerTurn === 'X' ? 'O' : 'X';
}

function getWinner() {
    els = document.querySelectorAll('#board > div');
    for (let win of wins) {
        let a = els[win[0]].innerText;
        let b = els[win[1]].innerText;
        let c = els[win[2]].innerText;

        if (a && a == b && b == c) {
            return a;
        }
    }

    return null;
}
