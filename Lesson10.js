function subscribe () {
  const buttonElement = document.querySelector('.js-subscribe-button');

    if(buttonElement.innerHTML === 'Subscribe'){
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
      
    } else {
      buttonElement.innerHTML = 'Subscribe';
      buttonElement.classList.remove('is-subscribed');
      
      
    };
}


function calculateTotal () {
  const inputElement = document.querySelector('.js-cost-input');
  
  // Add the number tag para maging number sya at hindi string 
  // tapos para maconvert si decimal to whole number * 100
  let cost = Number(inputElement.value) * 100; 
  
  document.querySelector('.js-total-cost').innerHTML = '';
  document.querySelector('.js-error-message').innerHTML = '';


  if (cost < 0) {
    document.querySelector('.js-error-message').innerHTML = 'Error: cost cannot be less than $0';
    return;
  }



  if (cost < 4000 * 100) {
    cost = cost + 1000;
  }

                /* if (cost < 4000){
                    cost += 1000;
                    
                }*/


//From whole number divide to 100 para mabalik sa decimal.
document.querySelector('.js-total-cost').innerHTML = `Your total is $${cost/100}. Thank you for shopping with us!`; 

}

function handleCostKeydown (event) {  
  if(event.key === 'Enter') {
    calculateTotal();
  }
}

const l10cExercise = document.querySelector('.js-button');

console.log(l10cExercise.classList.contains('js-button'));


/* function gamingElement () {
  const gaming = document.querySelector('.js-toggle-button');
  
  if (!gaming.classList.contains('is-toggled')) {
    gaming.classList.add('is-toggled'); 
  } else {
    gaming.classList.remove('is-toggled');  
  }

} */


function toggleButton (selector) {
  const toggle = document.querySelector(selector);

  if (!toggle.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    toggle.classList.add('is-toggled');
  } else {
    toggle.classList.remove('is-toggled');
  }
}


function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}


let calculation = '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
}


let calculation2 = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.calculator-screen').innerText = calculation;
  localStorage.setItem('calculation2', calculation2);
}
