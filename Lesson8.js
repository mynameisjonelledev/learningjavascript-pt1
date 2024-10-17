const product = {
  name: 'Bani Bars', 
  price: 1020
};

console.log(product);
console.log(product.name);

product.details = 'Very good bars from Bani';

console.log(product);
console.log(product.details);


// Rock Paper Scissors Game //

let score = JSON.parse(localStorage.getItem('score'));


if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

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

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
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
  if (score.wins >= 2) {
      console.log(`Congratulations! You win!`);
      alert(`Congratulations! You win!. Wins:${score.wins}`);
  } else if (score.losses >= 5) {
      console.log('What a loser! You lost!');
      alert(`What a loser! You lost!. Wins:${score.wins}`);
  } else if (score.ties >= 2) {
      console.log('My gosh! You tie so much!');
      alert(`My gosh! You tie so much!. Wins:${score.wins}`);
  }
}

// Lesson 8 Exercises - Objects //
// 8a, 8b, 8c //

const basketballs = {
  name: 'Basketball', 
  price: 2095  
};

const bowlingBall = {
  name: 'A Giant Bowling Ball',
  price: 2099
};

console.log(basketballs);

basketballs.price += 500;
console.log(basketballs.price);

basketballs['delivery-time'] = '3 days';
console.log(basketballs);

// 8d //
function comparePrice(product1, product2) {
if (basketballs.price < bowlingBall.price) {
  return basketballs;
} else {
  return bowlingBall;
}
}

console.log(comparePrice(basketballs, bowlingBall));