<<<<<<< HEAD
const button = document.getElementById('cliker');

function clickHandler() {
  alert('A');
}
=======
const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
