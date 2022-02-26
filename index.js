var scores, roundScore, activePlayer;
var gamePlaying;

var newGame = document.querySelector('.btn--new');
var roll = document.querySelector('.btn--roll');
var hold = document.querySelector('.btn--hold');
var diceImg = document.querySelector('.dice');

startNewGame();


function startNewGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    diceImg.style.display = 'none';
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('#name--0').classList.remove('active');
    document.querySelector('#name--1').classList.remove('active');
    document.querySelector(`#name--0`).style.color = '#333';
    document.querySelector(`#name--1`).style.color = '#333';
    document.querySelector('#name--0').classList.add('active');

}



function changePlayer() {
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    roundScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    diceImg.style.display = 'none';

}


function btnHold() {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        // console.log(scores);

        if (scores[activePlayer] >= 50) {
            document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER!';
            document.querySelector(`#name--${activePlayer}`).style.color = '#0C903C';
            diceImg.style.display = 'none';
            gamePlaying = false;
            return;

        }
        changePlayer();
    }

}


function btn() {
    if (gamePlaying) {
        dice = Math.floor(Math.random() * 6) + 1;

        diceImg.style.display = 'block';
        diceImg.setAttribute('src', `images/dice-${dice}.png`);

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = roundScore;
        } else {
            changePlayer();
        }
    }

}

roll.addEventListener('click', btn);

hold.addEventListener('click', btnHold);

newGame.addEventListener('click', startNewGame);