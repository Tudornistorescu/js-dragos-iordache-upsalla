const person = {
  getName: function () {
    return 'Nylon Windbreaker';
  },
  getAge: function () {
    return 36;
  },
};

const currentYear = new Date().getFullYear();

console.warn(`
<<<<<<< HEAD
Afiseaza primul nume al persoanei folosind metoda getName()
=======
  Afiseaza primul nume al persoanei folosind
  metoda getName()
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
`);
console.log(person.getName().split(' ')[0]);

console.warn(`
<<<<<<< HEAD
Afiseaza anul de nastere al persoanei folosind metoda getAge()
si anul curent.
`);

console.log(currentYear - person.getAge());

console.log("'" + (currentYear - person.getAge()).toString().slice(-2));

console.warn(`
Afiseaza propozitia: "ma numesc xxx si am yy ani!"
`);

=======
  Afiseaza anul de nastere al persoanei folosind metoda getAge()
  si anul curent.
`);
console.log(currentYear - person.getAge());

console.warn(`
  Afiseaza ultimele doua cifre al anului de nastere al persoanei,
  folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);
console.log("'" + (currentYear - person.getAge()).toString().slice(-2));

console.warn(`
  Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
const firstName = person.getName().split(' ')[0];
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
