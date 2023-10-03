<<<<<<< HEAD
var company = 'The JavaScript SRL';
var companyRegistration = ' J40/11111/2017';
var companyCode = '12345678';
var companyAddress =
  'Strada Scripturilor, Numarul 94, Etaj 1, Sector 1, Bucuresti';
var brandName = 'Pixellab';

console.log(`
  Acest website („site-ul”) este administrat de catre ${Company} The JavaScripts SRL,
  cu sediul social in ${companyAddress},
  inregistrata la Registrul Comertului sub nr.${companyRegistration},
=======
var company = 'The JavaScripts SRL';
var companyRegistration = 'J40/11111/2017';
var companyCode = '12345678';
var companyAddress =
  'Strada Scripturilor, Numarul 94, Etaj 3, Sector 1, Bucuresti';
var brandName = 'Pixellab';

console.log(`
  Acest website („site-ul”) este administrat de catre ${company},
  cu sediul social in ${companyAddress},
  inregistrata la Registrul Comertului sub nr. ${companyRegistration},
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  cod unic de inregistrare ${companyCode} („${brandName}”).
  Operatorul datelor cu caracter personal este
  ${company}, prin brand-ul „${brandName}”, cu
  punctul de lucru la adresa: ${companyAddress};
<<<<<<< HEAD
  In continuare, ${company} va fi numit „Pixellab”.
=======
  In continuare, ${company} va fi numit „${brandName}”.
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
`);
