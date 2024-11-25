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

function startFinished() {
  const startButton = document.querySelector('.js-start-finish');

 /* setTimeout(function(){
    if(startButton.innerHTML === 'Start') {
      startButton.innerHTML = 'Finished'
      console.log('Finished')
    } 
  }, 1000); */

  // Simpler version from Simon
    setTimeout(function() {
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
  setTimeout(function() {
    button.classList.remove('js-loading');
    button.classList.add('js-finished');
    button.innerHTML = 'Finished!';
    console.log('Finished!');
  }, 1000);
}




// 12e - Create the 'Add to cart' button below. When clicking this
//       button, display the message 'Added' below the button.
//       Then,after 2 seconds, remove the message.

function addedButton() {  //✅
  const addedMessage = document.querySelector('.added-message');  //✅

  addedMessage.innerHTML = 'Added'; //✅

  setTimeout(function(){  //✅
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

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}


// 12g - Imagine we're creating a messaging app. Use 
//       setInterval() and document.title to create the
//       feature on the right (the title changes every 1 second).


/* setInterval(function(){

  if (document.title === 'Lesson 12 : Advanced Functions') {
    document.title = `(${message}) New messages`;
  } else {
    document.title = 'Lesson 12 : Advanced Functions';

  }
}, 1000); */
  

// 12h - Continuing from 12g, instead of displaying 
//       '(2) New messages' every time, save the number of messages
//       in a variable: let messages = 2; 

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

setInterval(function(){

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
