var person = {
  name: 'Dragos',
  surname: 'iordache',
  age: 36,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 31,
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
Afisiaza propozitia: "Ma numesc xxx yyy si stiu
html si css" Foloseste notatia cu paranteze patrate
`);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.name +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(`
Afiseaza propozitia "Sunt xxx si acum invat JavaScript."
Nu folosi valoarea din arrayul de skills.
`);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(`
Afiseaza propozitia "am x prieteni: Larry, Steven si Carol."
Foloseste proprietatea length si apeleaza direct proprietatile name ale obiecterlor.
`);

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
