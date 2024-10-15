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

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
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


/* Lesson 7 Exercises - Functions */
/* 7a , 7b */

function greet (name) {
  console.log(`Hello, ${name}!`);
}

greet('Snacky');
greet('Snow Flakes');
greet (`Ling Xiao Yu`);
greet(`Mike`);
greet(`Pulgas`);


/* 7c */

function greet (name) {
  if (!name) {
    console.log('Hi there!')
  } else {
    console.log(`Hello, ${name}!`)
  }
}

greet('Jonna,Ayoko sa pusa mo');
greet();


/* Lesson 7 Exercises - Functions */
/* 7d */

function convertToFahrenheit(celsius) {
  return(celsius * 9 / 5) + 32;
}

console.log(convertToFahrenheit(25));


/* 7e */
function convertToCelsius(fahrenheit) {
  return(fahrenheit - 32) * 5 / 9;
}

console.log(convertToCelsius(86));



/* 7f */
function convertToFahrenheit(celsius) {
  return(celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
  return(fahrenheit - 32) * 5 / 9;
}


function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    const result = convertToFahrenheit(degrees);
    return `${result}F`
  } else if (unit === 'F') {
    const result = convertToCelsius(degrees);
    return `${result}C`
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

/* To be honest*/
/* Nalilito na pa ako sa return na 'yan.*/


/* TAPUSIN MO UNG EXE */