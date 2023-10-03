var userInput = prompt('Introdu un numar');
var number = Number(userInput);
<<<<<<< HEAD
var errorMesage = 'Nu s-a introdus un numar';
var paragrafElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMesage);
} else if (number % 2 === 0) {
  var mesage = `numarul ${number} este par`;
  // par | even
  console.log(mesage);
  paragrafElement.innerText = mesage;
} else {
  var mesage = `Numarul ${number} este impar`;
  // impar | odd
  console.log(mesage);
  paragrafElement.innerText = mesage;
=======
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number % 2 === 0) {
  var message = `Numarul ${number} este par`;
  // par | even
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = `Numarul ${number} este impar`;
  // impar | odd
  console.log(message);
  paragraphElement.innerText = message;
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
}
