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






