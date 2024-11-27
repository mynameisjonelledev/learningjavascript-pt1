// Rock Paper Scissors Game //

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

let isAutoPlaying = false;

// intervalId was made dahil kapag pinasok sya sa function ay
// magbabago ang kanyang laman.
let intervalId;  

function autoPlay() {
  if (!isAutoPlaying) {
      document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';

      intervalId = setInterval(() => { // <-- 
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
  } else {
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';

    clearInterval(intervalId);
    isAutoPlaying = false;
  } 
}

function resetScore () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); // para maremove ung save sa local storage
  updateScoreElement ();
  console.log(score);
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
  greetingMessage();
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
  greetingMessage();
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
  greetingMessage();
});

document.querySelector('.js-reset-score-button').addEventListener('click' , () => {
  confirmationMessage ();
});


document.querySelector('.js-check-score-button').addEventListener('click', () => {
  alert(`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

greetingMessage();
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
          
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose!';
          } else if (computerMove === 'paper') {
            result = 'You win';
          } else if (computerMove === 'scissors') {
            result = 'Tie';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win!';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else if (computerMove === 'scissors') {
            result = 'You lose!';
          }

        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else if (computerMove === 'scissors') {
            result = 'You win!';
          }
        }

        if(result === 'You win!'){
          score.wins += 1;
        } else if (result === 'You lose!') {
          score.losses += 1;
        } else if (result === 'Tie.' ) {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement ();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;

       
} 

function updateScoreElement () {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
} 

// Happy lang ako. Ako ang nag code nito. 
// Nabaliw lang konti dahil according kay VSCode may problem daw.
// gosh. Problema ko nga di ko maaayos e. 
// Pero hindi tayo sumuko, nag gemini na ako. HAHAHHA

function greetingMessage() {
  if (score.wins >= 10) {
      alert(`Congratulations! You win!. Wins:${score.wins}`);
      
  } else if (score.losses >= 10) {
      alert(`What a loser! You lost!. Wins:${score.wins}`);
      
  } else if (score.ties >= 10) {
      alert(`My gosh! You tie so much!. Wins:${score.wins}`);
      
  }
}

function showResult () {
  document.querySelector('.js-result').innerHTML = result;
}

const credit = document.querySelector('.footers-jonelle');

document.body.addEventListener('keydown', (event) => {
  if(event.key) {
    credit.innerHTML = `Made with love by <a href="https://mynameisjonelledev.github.io/jonellewebpage/" target="_blank">Jonel Cubio</a>.`;
  };
});

document.body.addEventListener('click', () => {
  credit.innerHTML = `Made with love by <a href="https://mynameisjonelledev.github.io/jonellewebpage/" target="_blank">Jonel Cubio</a>.`;
});

function confirmationMessage () {
  document.querySelector('.js-confirmation-message').innerHTML = 
  'Are you sure you want to reset the score? <button class="js-reset-confirm-yes reset-confirm-button">Yes</button><button class="js-reset-confirm-no reset-confirm-no">No</button>';
}

document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
  resetScore ();
  hideResetConfirmation ();
});

document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
  hideResetConfirmation ();
});

function hideResetConfirmation () {
  document.querySelector('.js-confirmation-message').innerHTML = '';
}

// pa edit. ayaw gumana ang yes  & no
