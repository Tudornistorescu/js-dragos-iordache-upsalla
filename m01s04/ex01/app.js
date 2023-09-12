var userInput = prompt('Introdu un numar');
var number = Number(userInput);

if (userInput.trim() === '') {
  console.log('Nu s-a introdus un numar');
} else if (isNaN(number)) {
  console.log('Nu s-a introdus un numar');
} else if (number % 2 === 0) {
  // par | even
  console.log('Numarul este par');
} else {
  // impar | odd
  console.log('Numarul este impar');
}
