<<<<<<< HEAD
var person = {
=======
const person = {
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  getName: function () {
    return 'Dragos Iordache';
  },

  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`
<<<<<<< HEAD
Folosind accessorul, salveaza numele
mic al persoanei intr-o variabila si
foloseste-l in propozitia: "Eu sunt xxx"
=======
  Folosind accesorul, salveaza numele
  mic al persoanei intr-o variabila si
  foloseste-l in propozitia: “Eu sunt xxx.”
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`
<<<<<<< HEAD
Afiseaza anul de nastere al persoanei folosind anul curent.
=======
  Afiseaza anul de nastere al persoanei folosind anul curent.
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
`);
const curentYear = new Date().getFullYear();
console.log((curentYear - accessor('Age')).toString());
