const todoList = [''];

renderTodoList ();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  
  
  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  
  todoList.push(name);

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
