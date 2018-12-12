
var scores, activePlayer, roundScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Get a randdom number

    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';

    //3. update the round score if the rolled number was not a 1
    if (dice !== 1) {
        //addd score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        roundScore = 0;
        nextPlayer();
    };


})

document.querySelector('.btn-hold').addEventListener('click', function () {
    //add current score to the global score
    scores[activePlayer] += roundScore;


    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



    //check if the player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;



    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';


}










































// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em >';
// //var x = document.querySelector('#score-0').textContent;
//console.log(x);
