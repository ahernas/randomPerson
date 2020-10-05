const fs = require('fs');

const genders = [
    'M',
    'F'
];

const maleNames = [
    'Michał',
    'Patryk',
    'Piotr',
    'Sebastian',
    'Wiktor',
    'Maciej',
    'Rafał',
    'Sławomir',
    'Przemysław',
    'Mateusz',
    'Paweł',
    'Grzegorz',
    'Jakub',
    'Krzysztof',
    'Jerzy'
];

const femaleNames = [
    'Kinga',
    'Magdalena',
    'Katarzyna',
    'Joanna',
    'Malwina',
    'Justyna',
    'Patrycja',
    'Natalia',
    'Anna',
    'Elżbieta',
    'Paulina',
    'Klara',
    'Dorota',
    'Julia',
    'Kinga'
];

const lastNames = [
    'Nowak',
    'Krawczyk',
    'Kaczmarek',
    'Mazur',
    'Woźniak',
    'Wójcik',
    'Mróz',
    'Błaszczyk',
    'Szymczak',
    'Król',
    'Zając',
    'Sikora',
    'Walczak',
    'Wieczorek',
    'Stępień',
];

const randChoice = (arr) => {
    const randomIndex = Math.round(Math.random() * (arr.length - 1));
    return arr[randomIndex];
};

const people = [];

while (people.length < 20) {
   const randomPerson = {};
   randomPerson.gender = randChoice(genders);
   if (randomPerson.gender === 'M') {
       randomPerson.firstName = randChoice(maleNames);
   }
   else {
       randomPerson.firstName = randChoice(femaleNames);
   }
   randomPerson.lastName = randChoice(lastNames);
   randomPerson.age = Math.floor(Math.random() * 100);

   randomPerson.email = randomPerson.firstName.toLocaleLowerCase() + '.' + randomPerson.lastName.toLocaleLowerCase() + '@gmail.com';

   randomPerson.phone = Math.round(Math.random() * (999999999 - 100000000) + 100000000);

   people.push(randomPerson);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
