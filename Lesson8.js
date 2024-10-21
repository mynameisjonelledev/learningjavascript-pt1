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


// Lesson 8 Exercises - Objects //
// 8e //

const product10 = {
  name: 'Keyboard',
  price: 1253
};

const product11 = {
  name: 'Keyboard',
  price: 1253
};

const product12 = {
  name: 'Gaming Mouse',
  price: 1098
}


function isSameProduct(product1, product2) {
  if (product10.name === product11.name && product10.price === product11.price) {
    return true;
  } else if (product11.name === product12.name && product11.price === product12.price) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameProduct(product10,product11));
console.log(isSameProduct(product11, product10));

// 8f //

const cat1 = 'Snacky';
const cat2 = 'Ling Xiao Yu'
const greet = 'Good morning';

console.log(cat1.toLowerCase());
console.log(cat2.toUpperCase());
console.log(greet.toLowerCase());

// 8g //

console.log('hello '.repeat(2));
console.log('Meow '.repeat(3));


// 8h //
let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
}




/* const randomNumber = Math.random ();

const result = ``;

if (randomNumber < 0.5) {
  result = `heads`;
} else {
  result = `tails`;
}

const guess = `heads`;

if (guess === result) {
  console.log(`You win!`);
} else {
  console.log(`Sorry, you lose!`);
} */


// Challenge Exercises //
// 8i , 8j, 8k //

const score2 = JSON.parse(localStorage.getItem('score2'))|| {
  wins: 0,
  losses: 0
};

function playGame(guess) {
const randomNumber = Math.random ();

let result = ``;


if (randomNumber < 0.5) {
  result = `heads`;
} else {
  result = `tails`;
}


if (guess === result) {
  console.log('You win!');
  score2.wins +=1;
} else {
  console.log('You lose!');
  score2.losses +=1;
}
console.log(score2);

localStorage.setItem('score2', JSON.stringify(score2));
}
