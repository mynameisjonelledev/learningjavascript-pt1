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