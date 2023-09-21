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
Afiseaza primul nume al persoanei folosind metoda getName()
`);
console.log(person.getName().split(' ')[0]);

console.warn(`
Afiseaza anul de nastere al persoanei folosind metoda getAge()
si anul curent.
`);

console.log(currentYear - person.getAge());

console.log("'" + (currentYear - person.getAge()).toString().slice(-2));

console.warn(`
Afiseaza propozitia: "ma numesc xxx si am yy ani!"
`);

const firstName = person.getName().split(' ')[0];
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
