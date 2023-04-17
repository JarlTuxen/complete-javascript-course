'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D'); */
// const interface = 'Audio';
// const private = 534;

/* function logger() {
    console.log('text');
}

logger();
logger(); */

/* function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/* //function declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);
console.log(age1);

//function expression (anonymous function)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2); */

/* //arrowfunction
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); */

/* const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

/* function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

/* const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement
    }
    else {
        console.log(`${firstName} has already retired. 🫶`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Bob')); */

/* // Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    let winner;
    let winnerScore;
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (2 * avgDolphins <= avgKoalas) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No winner!');
    }
}

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
checkWinner(averageDolphins, averageKoalas);

averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
checkWinner(averageDolphins, averageKoalas); */

// Arrays
/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
 */
/* const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[years.length - 1])];
console.log(ages); */

/* const friends = ['Michael', 'Steven', 'Peter'];
//add elements
const newLength = friends.push('Jay');
console.log(newLength, friends);
friends.unshift('John');
console.log(friends);
//remove elements
const element = friends.pop();
console.log(element, friends);
const element2 = friends.shift();
console.log(element2, friends);
//index
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));
if (friends.includes('Steven')) console.log('You have a friend called Steven'); */

// Coding Challenge #2
/* const calcTip = function (bill) {
    //ternary
    return 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.20;
} */

/* const calcTip = bill => 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.20;
//console.log(calcTip(20), calcTip(100), calcTip(500));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); */

// objects
/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; */
/* console.log(jonas);
console.log(`${jonas.firstName} ${jonas['lastName']}`); */

// getting field by expression in brackets
/* const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]); */

// input til access
/* const choice = prompt('What do you want to know about Jonas? Chose between firstName, lastName, age, job and friends');
if (jonas[choice]) {
    console.log(`${choice}: ${jonas[choice]}`);
} else {
    console.log('Wrong request! Chose between firstName, lastName, age, job and friends');
} */

// adding extra fields to object
/* jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas); */

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
/* console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); */

/* // Coding Challenge #3
// Calculate BMI
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    //calcBMI: (m, h) => m / h ** 2
    // calcBMI: () => this.mass / this.height ** 2
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    //calcBMI: (m, h) => m / h ** 2
    //calcBMI: () => this.mass / this.height ** 2
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

// mark.bmi = mark.calcBMI(mark.mass, mark.height);
// john.bmi = john.calcBMI(john.mass, john.height);
mark.bmi = mark.calcBMI();
john.bmi = john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}; */
