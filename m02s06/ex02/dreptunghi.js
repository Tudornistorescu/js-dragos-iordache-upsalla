console.log(process.argv);
// destructurare
// let lenght = process.argv[2]
// let width = process.argv[3]
let [, , lenght, width] = process.argv;
length = Numer(length);
width = Number(width);

console.log(length + width);
