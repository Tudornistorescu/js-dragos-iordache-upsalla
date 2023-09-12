var userInput = prompt('Introdu un numar');
var number = Number(userInput);
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
}
