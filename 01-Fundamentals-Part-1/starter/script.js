// let js = 'amazing';
// //if (js === 'amazing') alert('Javascript is FUN!');
// console.log(40 + 2);
// let PI = 3.1415265;
// let country = "Denmark";
// let continent = "Europe";
// let population = 6500000;
// console.log(country);
// console.log(continent);
// console.log(population);

//Codeing Challenge #1

// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;
// const heightMark = 1.88;
// const weightMark = 95;
// const heightJohn = 1.76;
// const weightJohn = 85;
// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;
// const markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

//template literals
// const compareTemplateLiteral = `Mark's BMI: ${bmiMark}
// John's BMI: ${bmiJohn}.
// Is Mark's BMI greater than John's? ${markHigherBMI}`;
// console.log(compareTemplateLiteral);

//Coding Challenge 2
//emojis Ctrl + Command + Space / Windows + .
// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;
// const heightMark = 1.88;
// const weightMark = 95;
// const heightJohn = 1.76;
// const weightJohn = 85;
// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn}). 𐄷`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})𐄷`);
// };

//number conversion & coercion
// const birthYear = '1969';
// console.log(birthYear + 18);
// console.log(18 + birthYear);
// console.log(Number(birthYear) + 18);
// console.log(String(42) + 42);
// console.log("4" + 2);
// console.log(4 + Number("2"));

//falsy values false, 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean('Ost'));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(-1));

// == & ===
// let favorite = Number(prompt("What's your favorite number?"));
// if (favorite === 42) console.log("42 is a cool number!");

//Coding Challenge 3

// const scoreDolphin1 = 77;
// const scoreDolphin2 = 108;
// const scoreDolphin3 = 105;
// const scoreKoalas1 = 109;
// const scoreKoalas2 = 75;
// const scoreKoalas3 = 106;
// const avgDolphins = (scoreDolphin1 + scoreDolphin2 + scoreDolphin3) / 3;
// console.log(`Dolphins: ${avgDolphins}`);
// const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
// console.log(`Koalas: ${avgKoalas}`);
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log("Dolphins win!🏆");
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//     console.log("Koalas win!🏆");
// } else if (avgKoalas >= 100 && avgDolphins >= 100) {
//     console.log("Draw!");
// } else {
//     console.log("No Trophy!");
// }

//switch
// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan');
//         console.log('Meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Code');
//         break;
//     case 'friday':
//         console.log('Test');
//     case 'saturday':
//     case 'sunday':
//         console.log('Weekend');
//         break;
//     default:
//         console.log('Invalid day!');
// }

const day = 'sunday';
if (day === 'monday') {
    console.log('Plan');
    console.log('Meetup');
} else if (day === 'tuesday') {
    console.log('Prepare');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Code');
} else if (day === 'friday') {
    console.log('Test');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Weekend');
} else {
    console.log('Invalid day!');
}

//Coding challenge 4

const bill = 430;
const tip = (50 <= bill && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
