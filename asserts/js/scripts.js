var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

/*Função incrementar */
function increment() {
  currentNumber = currentNumber + 1; 
  currentNumberWrapper.innerHTML = currentNumber; /*  Html que está dentro dele "innerHTML"*/
}

/*Função decrementar */
function decrement() {
  currentNumber = currentNumber - 1; 
  currentNumberWrapper.innerHTML = currentNumber;
}