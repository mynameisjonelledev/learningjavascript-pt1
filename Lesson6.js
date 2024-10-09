true
false

console.log(3 < 5);

if (30 <= 10) {
  console.log ('You have failed.\n30 is not less than 10.');
} else {
  console.log ('You have passed! Very good-den!')
  console.log('Everybody wants as Ling Xiao Yu');
  console.log('Do you want a Ling Xiao Yu?');
} 

// testing if I can do it also. HAHHAHA //
// You need atleast 3 cats to be able to adopt a new cat //

const adoptCat = 3;

if (adoptCat <= 1) {
  console.log(`Sorry, you need 3 cats before you can adopt another!`);
} else if (adoptCat >= 10) {
  console.log(`Sorry, you only have 2 cats.\nCome again later!`)
} else {
  console.log(`Please choose a cat`)
  console.log(`A. Snacky`)
  console.log(`B. Ling Xiao Yu`)
  console.log(`C. Snowflakes`)
  console.log(`D. Mike`)
  console.log(`E. Pulgita`)
}



/* Lesson 6 Exercises */
/* 6a , 6b , 6c*/ 
const hour = 15;
const name = 'Jonelle!';

if (hour >= 4 && hour <= 11) {
  console.log(`Good morning, ${name} 😀`);
} else if (hour >= 12 && hour <= 17) {
  console.log(`Good afternoon, ${name} 😀`);
} else if (hour >= 18 && hour <= 22) {
  console.log(`Good evening, ${name} 😀`);
} else {
  console.log(`Time to sleep,${name} 😀`);
} 

/* Lesson 6 Exercises */
/* 6d , 6e */
const age = 29;
const isHoliday = true;

if ((age <= 6 | age >= 65) && ! isHoliday) {
  console.log(`You qualify for a Discount!`);
} else {
  console.log(`Sorry! You don't qualify for a Discount.`);
}

/* Lesson 6 Exercises */
/* 6f , 6h , 6i , 6j */
const randomNumber = Math.random ();

let result = ``;

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
}

/* Lesson 6 Exercises */
/* 6k , 6l */

let cartQuantity = 0;