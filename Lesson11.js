const todoList = [];

renderTodoList ();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    
    const { name, dueDate } = todoObject;

    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div>
     
     <button class="delete-todo-button" onclick="
     todoList.splice(${i}, 1);
     renderTodoList ();
     ">Delete</button>
    `;
    todoListHTML += html;
  }
  
  
  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
});

  inputElement.value = '';

  renderTodoList ();
  
}

function onKeyDownInput (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

/*
let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);


for (let randomNumber = 0; randomNumber < 0.5;) {
  randomNumber = Math.random();
}

console.log(randomNumber); */



// 🇦🇳🇸🇼🇪🇷🇸 //

// 11a - Modify the last value
let nums11a = [10, 20, 30];
nums11a.push(99);

console.log(nums11a);




// 11b - Take an array and return the last array value
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([10,20,30,'Ling Xiao Yu']));




// 11c - Takes an array and returns an array where first
//      and last values are swapped (switched)
function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

 return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));



// 11d - Create a for loop that counts up from 0 to 10, but
//       counts up by 2

for (let i = 0; i <= 10; i += 2) {
  console.log (i);
}



for (let i = 0; i <= 100; i +=20) {
  console.log(i);
}


// 11e - Create a for loop that counts down from 5 to 0

for (let i = 5; i >= 0; i--) {
  console.log (i);
}


// 11f - Do exercise 11d and 11e, but using while loops

let indes = 0;

while (indes <= 10) {
  indes += 2;
  console.log (indes);
}

let ides = 5;

while (i >= 0) {
  ides--;
  console.log (ides);
}




// 11g - Create a loop that takes an array of numbers and
//       creates a new array where each number is increased by 1.

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1 );
}

console.log (result);


// 11h - Create a function addOne(array) that takes an array of
//       numbers and returns an array where each number is 
//       increased by 1.

function addOne (array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
   result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3, 4, 5]));
console.log(addOne([-1, -2, -3]));


// 11i - Create a function addNum(array,num) that takes an array
//       of numbers and returns an array where each number is
//       increased by 'num'.

function addNum(array, num) { //✅//
  const result = [];          //✅//

  for (let i = 0; i < array.length; i++) { //✅//
    result.push(array[i] + num);  //✅//
  }

  return result;  //✅//
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));


// 11j - Create a function addArrays(array, array2) that takes
//       2 arrays of numbers and adds each number in the 
//       arrays together. 

function addArrays(array, array2) {   //✅//
  const result = [];  //✅//

  for (let i = 0; i < array.length && array2.length; i++) {
    result.push(array[i] + array2[i]);  //✅//
  }

  return result;  //✅//
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));




// 11k - Create a function countPositive (nums) that takes
//       an array of numbers and returns how many numbers in
//       the array are greater than 0.

function countPositive(nums) {  //✅//
  let result = 0;

  for (let i = 0; i < nums.length; i++){  //✅//
    if (nums[i] > 0) { // Ganito yan kapag may nakitang greater
      result++;        // than sa 0 sa nums ay magpl-plus one.
  }
}

  return result;  //✅//
}

console.log(countPositive([1,-3,5]));




// CHALLENGE EXERCISES //

// 11l - Create a function minMax(nums) that takes an array of
//       numbers and returns an object with the minimum
//       and maximum numbers in the array (do this using a loop
//       instead of using something like Math.min).

function minMax(nums) { //✅//
  const result = {
    min: nums[0],
    max: nums[0]
  };

  /* const result = {
    min: null,
    max: null
  }; */

  for (let i = 0; i < nums.length; i++) { //✅//
    const value = nums[i];

    // If the value is less than the min,
    // update the min.
   if (value < result.min) {
    result.min = value;
  }

  // If the value is greater than the max,
  // update the max.
  if (value > result.max) {
  result.max = value;

  } 

// 11m - Update exercise 11l to also handle these cases:

 // If the min is null OR the value is
 // less than the min, update the min.
 if (result.min === null || value < result.min) {
  result.min = value;
 }

// If the max is null OR the value is
// greater than the max, update the max.
 if (result.max === null || value > result.max) {
  result.max = value;
 }

  return result;  //✅//
}

}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));




// 11n - Create a function countWords(words) that takes an 
//       array of strings and returns an object with how
//       many times each string appeared. 

function countWords(words) {  //✅//
  const result = {}

  for (let i = 0; i < words.length; i++) {  //✅//
    const word = words[i]; 

    /* If it’s NOT in the result: We add it to result and give it a count of 1 (because we’ve seen it once).
    If it’s already in the result: We just add 1 more to its count (because we saw it again). */

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
    
  }

  return result;
}

console.log(countWords(['banana', 'apple', 'apple', 'bani']));



// 11o - Create an array of strings, loop over the array, and
//       check if the string 'search' is inside the array. If
//       it is ,console.log() the index of 'search' in the array.
//       If not, console.log '-1'.

  let words = ['hello', 'world', 'search', 'good'];

  // Set the index to -1 at the start (so we'll assume
  // the string 'search' doesn't exist in the array).
  // If we find the string 'search' in the array, we
  // will update the index.
  let index = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
      index = i;
    }
  }

  console.log(index);

  words = ['not', 'found']
  index = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
      index = i;
    }
  }

  console.log(index);



// 11p - Modify 11o so that if 'search' appears multiple
//       times in the array, it will console.log() the index
//       of the first appearance of 'search'. Use break;


words = [' hello', 'world', 'search', 'good', 'search']; //✅//
index = -1; //✅//

for (let i = 0; i < words.length; i++) {  //✅//
  if (words[i] === 'search') { //✅//
    index = i;  //✅//
  // Once we find 'search', immediately exit
  // the loop since we want the index of the
  // first appearance of 'search'.
    break;  //✅//
  }
}

console.log(index);


words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);



// 11q - Create a function findIndex(array,word) that searches
//       an array for a string(in the 'word' parameter) and
//       returns the index of the first appearance of the
//       string. If it doesn't exist in the array, return -1.

function findIndex(array,word) {   //✅//
  for (let i = 0; i < array.length; i++) {   //✅//
    if (array[i] === word) {   //✅//

      // Instead of creating an accumulator
      // variable and updating it in the loop,
      // we can just return i directly, when
      // we find it since this is a function.

      return i;  //✅//
      
    }
  }

  // If the function has not returned by now,
  // logically that means the word must not
  // exist in the array, so we'll return -1.


  return -1;
}

console.log(findIndex(['green','red','blue', 'red'],'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));


// 11r - Create a function removeEgg(foods) that takes an array
//       of strings and returns an array where the string 'egg'
//       is remove. (Hint: loop through the array and check if
//       each string is 'egg'. If it is 'egg', use 'continue;' to
//        skip it. If it's not 'egg', add it to the result.)

function removeEgg(foods) { //✅//
  let result = [];  //✅//

  for (let i = 0; i < foods.length; i++) {  //✅//
    if (foods[i] === 'egg') { //✅//
      continue; //✅//
    }
    // We don't need to have an else here because
    // the only way to reach this code is if the 
    // if-statement above is false.
    result.push(foods[i]);  //✅//
  }

  return result;  //✅//
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));




// 11s - Update exercise 11r to only remove the first 2 eggs 
//       from the array.

function removeEgg(foods) {
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    // Only skip 'egg' if we removed less than 2
    // of them so far.
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      // Update the number of 'egg' we have removed.
      // This must be done before continue, otherwise,
      // doing continue first will just skip this code.
      eggsRemoved++;
      continue;
    }

    result.push(foods[i]);
  }

  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// 11t - Arrays have a method called .reverse(), which reverses
//       the order of the values in the array.Using .reverse(),
//       update exercise 11s to only remove the last 2 eggs
//       from the array.

function removeEgg(foods) {
  // To remove the last 2 'egg', reverse the array first.
  const reversedFoods = foods.reverse();

  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  // At the end, remember to .reverse() back the result.
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));




// 11u - In exercise 11t, one problem with reverse() is that it
//       doesn't create a copy of the array it is reversing. It
//       modifies the original array. Update the code so the
//       function does not modify the original array. (Hint: use
//       the .slice() method to create a copy of an array's 
//       values.)

function removeEgg(foods) {
  // To prevent modifying the original array, we
  // can create a copy of the array using .slice()
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  // Advanced technique:
  // Since foods.slice() results in an array, we
  // can also use .reverse() directly like this:
  // foods.slice().reverse();
  
  // This technique is called "method chaining"
  // because we use one method after another
  // (like a chain of methods).
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);

// This is my answer. This code is working pero may issues // 
// ⬇️⬇️⬇️ //

/* function removeEgg() {

  let foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
  const foodsCopy = foods.slice();  //✅//
  const reversedFoods = foodsCopy.reverse();  //✅//

  const result = []; //✅//
  let eggsRemoved = 0; //✅//

  for (let i = 0; i < reversedFoods.length; i++) {  //✅//
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {  //✅//
      eggsRemoved++;  //✅//
      continue; //✅//
    }

    result.push(reversedFoods[i]);  //✅//
  }

  return result.reverse();  //✅//

}

console.log(removeEgg());
*/ 



// Challenge Exercises 

// 11v - We'll do the famous FizzBuzz problem. Create a loop
//       that displays 1 to 20 in the console.If the number
//       is divisible by 3, display 'Fizz' instead of the
//       number. If it's divisible by 5, display 'Buzz' instead.
//       If it's divisible by 3 and 5, display 'FizzBuzz' 
//       instead. (Reminder: divisible by 3 means num % 3 === 0).


for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Ang sabi ni chatgpt, unahin
    console.log('FizzBuzz');        // na ang may && condition 
  } else if (i % 3 === 0) {         // dahil kapag inuna mo ung
    console.log('Fizz');            // walang ganun. Hindi na
  } else if (i % 5 === 0) {         // makakarating ung loop dun
    console.log('Buzz');            // at maglalabas na sya ng 
  } else {                          // maling answers. 
    console.log(i);
  }
}
// ^^ Praise God. Tama ung code ko ang it works!  ^^



// 11w - Create a copy of exercise 11q, where we created
//       findIndex(). Below it, create a function unique(array)
//       that takes an array of strings and returns an array
//       where each string only appears once (there are no 
//       duplicates). Try to use findIndex() function in your
//       solution.

function findIndex(array,word) {   //✅//
  for (let i = 0; i < array.length; i++) {   //✅//
    if (array[i] === word) {   //✅//

     return i;  //✅//
      
    }
  }

  return -1;
}

console.log(findIndex(['green','red','blue', 'red'],'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// answers starts here //

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    // Using the findIndex() function from above, we
    // can check if the string is already in the
    // result array. If it's not in the result array
    // (index is -1), then add it to the result array.
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));


