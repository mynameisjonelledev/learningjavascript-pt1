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




//11c - Takes an array and returns an array where first
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
