// Todo List

const todoList = JSON.parse(localStorage.getItem('todoList')) ||[]; //✅

renderTodoList ();

function renderTodoList () {
  let todoListHTML = '';


  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;

    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div>
     
     <button class="delete-todo-button" onclick="
     todoList.splice(${index}, 1);
     renderTodoList ();
     ">Delete</button>
    `;
    todoListHTML += html;
  })

  /*
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
  } */
  
  
  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});


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
  saveToStorage();
  
}

function onKeyDownInput (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Lesson 12 Exercises - Advanced Functions

// 12a - Create a variable called 'add' and save a function inside.
//       This function will console.log(2+3); Run the function
//       twice. 

const add = function() {  //✅
  console.log(2+3); //✅
}

add();
add();



// 12b - Continuing from exercise 12a, create a function 
//       runTwice(fun) that takes a function (as a parameter) 
//       and runs it twice.

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);


// 12c - Create a button below. When clicking the button, after
//       1 second, the text inside the button changes to 
//       'Finished!'

document.querySelector('.js-start-finish').addEventListener('click', () => {
  updateButton();
});

function startFinished() {
  const startButton = document.querySelector('.js-start-finish');

 /* setTimeout(() => {
    if(startButton.innerHTML === 'Start') {
      startButton.innerHTML = 'Finished'
      console.log('Finished')
    } 
  }, 1000); */

  // Simpler version from Simon
    setTimeout(() => {
    startButton.innerHTML = 'Finished!';
  }, 1000);
}



// 12d - Continuing from exercise 12c, modify the button so that 
//       when we click it, the text immediately changes to 
//       'Loading...', and then after 1 second, it changes to 
//       'Finished'

function updateButton() {
  const button = document.querySelector('.js-start-finish');
  
  button.classList.add('js-loading');
  button.innerHTML = 'Loading...';
  console.log('Loading...');
  setTimeout(() => {
    button.classList.remove('js-loading');
    button.classList.add('js-finished');
    button.innerHTML = 'Finished!';
    console.log('Finished!');
  }, 1000);
}




// 12e - Create the 'Add to cart' button below. When clicking this
//       button, display the message 'Added' below the button.
//       Then,after 2 seconds, remove the message.

document.querySelector('.js-add-to-cart').addEventListener('click', () => {
  addedButton();
});

function addedButton() {  //✅
  const addedMessage = document.querySelector('.added-message');  //✅

  addedMessage.innerHTML = 'Added'; //✅

  setTimeout(() => {  //✅
    addedMessage.innerHTML = '';  //✅
  }, 2000); //✅


}


// CHALLENGE EXERCISE 

// 12f - Continuing from 12e, if we click the button, wait 1 to
//       1.5 seconds, and then click the button again, notice
//       that the second time, the message disappears very quickly
//       (because the first setTimeout is still running and will 
//       make the message disappear very soon).


let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    messageElement.innerHTML = '';
  }, 2000);
}


// 12g - Imagine we're creating a messaging app. Use 
//       setInterval() and document.title to create the
//       feature on the right (the title changes every 1 second).


/* setInterval(() => {

  if (document.title === 'Lesson 12 : Advanced Functions') {
    document.title = `(${message}) New messages`;
  } else {
    document.title = 'Lesson 12 : Advanced Functions';

  }
}, 1000); */
  

// 12h - Continuing from 12g, instead of displaying 
//       '(2) New messages' every time, save the number of messages
//       in a variable: let messages = 2; 

document.querySelector('.js-add-button').addEventListener('click', () => { addButton();
});

document.querySelector('.js-remove-button').addEventListener('click', () => { removeButton();
});

let message = 2;

function addButton() {
  const addElement = document.querySelector('.js-add-button');
  message++;  
}

function removeButton() {
  const removeElement = document.querySelector('.js-remove-button');
  message--;
}


// 12i - Continuing from 12h:
//       Dont let 'messages' go below 0.
//       If messages ==== 0 stop changing the title and display
//       'App' as the title.
//       When messages > 0 start changing the title again.

setInterval(() => {

  if (document.title === 'Lesson 12 : Advanced Functions') {
   if (message === 0) {
      document.title = 'Lesson 12 : Advanced Functions'
    } else if (message > 0) {
      document.title = `(${message}) New messages`;
    }
  } else {
    document.title = 'Lesson 12 : Advanced Functions';

  }
}, 1000);






// what filter does is filter array
([1, -3, 5].filter((value, index) => {
  if(value >= 0){
    return true;
  } else {
    return false;
  }
}));


// what map does is create a new array
[1,1,3].map((value,index) => {
  return 10;
});


// 12j - Create an arrow function called 'multiply' that takes 2 numbers, multiplies them together, and returns the result.

const multiply = (num1, num2) => {  //✅
  return num1 * num2; //✅
}

console.log(multiply(2,3)); //✅


//12k - Continuing from exercise 12j, write the arrow function
//      on one line (if you already did this, skip this exercise).

const multiply2 = (num1,num2) => num1 * num2; //✅

console.log(multiply2(7,10)); //✅


//12l - Create a function countPositive(nums) that takes an array
//      of numbers and returns how many numbers in the array
//      are greater than 0. Create this function using
//      forEach() instead of a loop.

function countPositive(nums) {
  let positiveNumbers = 0;

  // When there is only 1 parameter,
  // the brackets are optional. So
  // we can also write: num => { ... }
  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));


//12m - Create a function addNum(array,num) that takes an array
//      of numbers and returns an array where each number is
//      increased by 'num'. Create this function using .map()
//      instead of a loop.

function addNum(array,num) {
  return array.map((value) => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));


//12n - Create a function removeEgg(foods) that takes an array
//      of strings and returns an array where the strings 'egg'
//      is removed. Create this function using .filter() instead
//      of a loop.

function removeEgg(foods) {
  return foods.filter((food) => food !== 'egg');  
}
  
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


//12o - Update exercise 12n to only remove the first 2 eggs from 
//      the array. Again, use .filter() instead of a loop.



function removeEgg(foods) { //✅

  let eggsRemoved = 0;  //✅

  return foods.filter((food) => { //✅
    if (food === 'egg' && eggsRemoved < 2) {  //✅
      eggsRemoved++;  //✅
      return false; //✅
    } 
   
    return true;  //✅
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// 12p - Go back to the earlier exercises in lesson 12 (12c- 12i)
//       and switch the code to use arrow functions. (When passing
//       a function into another function, use arrow function.
//       Otherwise, you can use either syntax).


// 12q - Go back to the earlier exercises in lesson 12 (12c- 12i)
//       and instead of using onclick="", switch the code to use 
//       .addEventListener('click',...).




// CHALLENGE EXERCISES 

// 12r - Make a copy of the Rock Paper Scissors game into the files
//       12r.html, 12r.css, 12r.js.

// 12s - Update the 'Auto Play' button to use .addEventListener
//       ('click', ...) instead of onclick="..".

// 12t - Update the 'Auto Play' button so that when the game is 
//       auto playing, the text in the button is 'Stop Playing'.
//       Otherwise, the text in the button is 'Auto Play'.

// 12u - Update the code so pressing 'a' on keyboard will auto
//       play the game.

// 12v - Update the 'Reset Score' button to use .addEventListener
//       ('click' ,..).

// 12w - Update the code so pressing 'Backspace' will reset the 
//       score.

// 12x - When clicking the 'Reset Score' or pressing 'Backspace',
//       instead of resetting the score immediately, display a
//       confirmation message below the button.
