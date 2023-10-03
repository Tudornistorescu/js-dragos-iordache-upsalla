var person = {
  name: 'Dragos',
<<<<<<< HEAD
  surname: 'iordache',
=======
  surname: 'Iordache',
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  age: 36,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
<<<<<<< HEAD
      age: 31,
=======
      age: 30,
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
<<<<<<< HEAD
Afisiaza propozitia: "Ma numesc xxx yyy si stiu
html si css" Foloseste notatia cu paranteze patrate
`);

=======
  Afiseaza propozitia: “Ma numesc xxx yyy si stiu
  html si css.” Foloseste notatia cu paranteze patrate
`);
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
<<<<<<< HEAD
    person.name +
=======
    person.surname +
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(`
<<<<<<< HEAD
Afiseaza propozitia "Sunt xxx si acum invat JavaScript."
Nu folosi valoarea din arrayul de skills.
`);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(`
Afiseaza propozitia "am x prieteni: Larry, Steven si Carol."
Foloseste proprietatea length si apeleaza direct proprietatile name ale obiecterlor.
`);

=======
  Afiseaza propozitia “Sunt xxx si acum invat JavaScript.”
  Nu folosi valoarea din arrayul de skills.
`);
console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(`
  Afiseaza propozitia “Am x prieteni: Larry, Steven si Carol.”
  Foloseste proprietatea length si apeleaza direct proprietatile
  name ale obiectelor.
`);
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);
