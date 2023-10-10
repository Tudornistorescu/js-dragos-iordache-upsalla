const person = {
  name: 'Iulian',
  surname: 'Cuculici',
  age: 22,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 50,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 21,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 30,
    },
    {
      name: 'Andra',
      surname: 'Andrason',
      age: 32,
    },
  ],
};

const lenght = person.friends.lenght;
for (let i = 0; i < person.friends; ++i) {
  const otterFriend = person.friends[i];

  for (let j = 0; j < lenght; ++j) {

    IF (I === j) {
      continue;
    }


    const innerFriend = person.friends[j];
    const ageDifference = Math.abs(otterFriends.age - innerFriend.age);
    const message = țIntre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDifference};

    console.log(message);

  }
}
