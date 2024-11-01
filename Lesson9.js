function lesson9Dom (){
  const lesson9Element = document.querySelector('.lesson9');

    if (lesson9Element.innerText === 'Lesson 9') {
      lesson9Element.innerText = 'DOM';
    } else {
      lesson9Element.innerText = 'Lesson 9';
    }
}

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

        updateScoreElement ();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;

       
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
      console.log(`Congratulations! You win!`);
      alert(`Congratulations! You win!. Wins:${score.wins}`);
  } else if (score.losses >= 10) {
      console.log('What a loser! You lost!');
      alert(`What a loser! You lost!. Wins:${score.wins}`);
  } else if (score.ties >= 10) {
      console.log('My gosh! You tie so much!');
      alert(`My gosh! You tie so much!. Wins:${score.wins}`);
  }
}

function showResult () {
  document.querySelector('.js-result').innerHTML = result;
}



function calculateTotal () {
  const inputElement = document.querySelector('.js-cost-input');
  
  // Add the number tag para maging number sya at hindi string 
  // tapos para maconvert si decimal to whole number * 100
  let cost = Number(inputElement.value) * 100; 
  
 
  if (cost < 4000){
    cost += 1000;
    
}

// From whole number divide to 100 para mabalik sa decimal.
document.querySelector('.js-total-cost').innerHTML = `Your total is $${cost / 100}. Thank you for shopping with us!`;

}


function handleCostKeydown (event) {  
  if(event.key === 'Enter') {
    calculateTotal();
  }
}

// Gawa gawa ko lang 'to. 
// Naisip ko nung ginamit ko ang banyo.

function thingsToRemember () {
  const thingsToRememberElement = document.querySelector('.js-things');

  let things = thingsToRememberElement.value;

  const targetParagraph = document.querySelector('.thingsAdd, .thingsAdd2');

  if (targetParagraph) {
    targetParagraph.textContent = things;
  } else {
    console.error('No target paragraph found for displaying things');
  }

  thingsToRememberElement.value = '';
}

function addThings (event) {
  if (event.key === 'Enter') {
    thingsToRemember();
  }
}

function button9 () {
  const buttonElement = document.querySelector('.l9-button');
  console.log(buttonElement);

}

function button9b () {
  const buttonElement9b = document.querySelector('.l9b-button');

  if (buttonElement9b.innerText === '9b' ) {
    buttonElement9b.innerText = '9b done!';
  } else {
    buttonElement9b.innerText = '9b';
  }
}


function l9dExercise () {
  const inputNameElement = document.querySelector('.js-name');

  let text = inputNameElement.value;

  document.querySelector('.js-name-output').innerText = `Your name is: ${text}!. Hello ${text}!`;

}


function l9dExerciseOnKeyDown (event) {
  if (event.key === 'Enter') {
    l9dExercise ();
  }
}

function l9hExercise () {
  const l9hElement = document.querySelector('.l9h-input');

  let l9hText = l9hElement.value;

  document.querySelector('.l9h-paragraph').innerText = l9hText;
}

let calculation = '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
}

/* 7k */

let cartQuantity = 0;

function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    document.querySelector('.l9j-paragraph').innerText = 'The cart is full! Checkout first before adding new items!';
  
  } else if (cartQuantity + change < 0) {
    document.querySelector('.l9j-paragraph').innerText = 'Not enought items on cart!';
  
  } else if (cartQuantity += change) {
    document.querySelector('.l9j-paragraph').innerText = `Cart quantity:${cartQuantity}`;
  }
}


// 8h //
let calculation2 = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.calculator-screen').innerText = calculation;
  localStorage.setItem('calculation2', calculation2);
}

