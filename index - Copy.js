

let firstName = 'Joe';
let lastName = 'Black';
let age = 48;

console.log(firstName, lastName);

//---------------------------------

let interestRate = 0.3;
//I can recall the var and change it's value without "let"
interestRate = 1;
//use 'const' if you do not want to reassign the value 
console.log(interestRate);
//---------------------------------

const interestRateTestOfConst = 0.3;
console.log(interestRateTestOfConst);

//----------Objects----


let person = {
   firstName: 'Joe',
   lastName: 'Black',
   age: '48'
};

// There are two ways to access object properties
// 1) Use dot notation to bring changes to the object's properties
person.lastName = 'Blackett Jr';

console.log(person.lastName);

// 2) Use Backet notation
person ['firstName'] = 'Callixtus';

console.log(person.firstName);

// --Arrays------------------------------

let selectedColors = ['red', 'blue'];
selectedColors[2] = 15;

console.log(selectedColors);




// --Function declaration---(performing a task)---------------------------

function greet (name, lastName)  {
    console.log('Hello, ' + name + ' ' + lastName);
}

greet('Callixtus', 'Blackett Jr');
greet('Joe', 'Black');






// --Function declaration---(performing a calculation)---------------------------

function square(number) {
   return number * number;
}

console.log(square(2));




function walk() {
    console.log('Cloe');
}
walk();


// --Function Expression (Named or Anonymous function)---------------------------

// let run = function() {
//     console.log('run');
// };

// let move = run;

// run();
// move();

