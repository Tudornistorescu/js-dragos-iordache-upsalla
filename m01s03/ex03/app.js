var person = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

andra.friends.carol = carol;
carol.friends.andra = andra;

console.warn(`
folosind keywordul delete, sterge prietenia
dintre person si larry (si invers).
`);
delete person.friends.larry;
delete larry.friends.person;

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.log(`
  Afiseaza numele complet a lui larry folosind obiectul person.
  `);

console.warn(`
Folosind obiectul carol,afiseaza numele
complet inversat al lui person.
`);

console.log(
  carol.friends.andra.friends.person.surname +
    ' ' +
    carol.friends.andra.friends.person.name,
);

console.warn(`
Folosind obiectul Andra, afiseaza numarul total
de caractere al numelui complet al lui Person.
`);
console.log(
  (andra.friends.person.name + andra.friends.person.surname).lenght.toString(),
);
