/*
	CORE JAVASCRIPT CONCEPTS
*/

// let variables = [ 'keniya', 'america', 'bermuda', 'nalanda', 'hosiyarpur' ];
// console.log(variables);
// console.log(variables.slice(1, 3));

// let animals = [ 'dog', 'cat', 'whale', 'horse', 'goat' ];
// console.log(animals);
// animals.splice(2, 0, 'meowwww', 'woaw', 'hissss');
// console.log(animals);
// animals.splice(2, 3);
// console.log(animals);
// let nums = [ 1, 2, 3, 4, 5 ];
// console.l;

// Objects
// const comments = {
// 	userName: 'himanshuRawat',
// 	downVote: 19,
// 	upVotes: 214,
// 	netScore: 195,
// 	commentText: 'Taste like chcken lol',
// 	tags: [ '#hilarious', '#funny', '#silly' ],
// 	inRelationship: false,
// 	UX: {
// 		design: 'flat-icon',
// 		stack: 'MEAN',
// 		user: '3 level'
// 	}
// };

// const palette = {
// 	red: '#eb4d4b',
// 	yellow: '#f9ca24',
// 	blue: '#30336b'
// };

// for (let color in palette) {
// 	console.log(`${color}		:${palette[color]}`);
// 	console.log();
// }

// for (let color of Object.keys(palette)) {
// 	console.log(color);
// }
// let mysteryColor = 'yellow';
// const student = [
// 	{
// 		firstName: 'Zeus',
// 		grade: 86
// 	},
// 	{
// 		firstName: 'Artemis',
// 		grade: 97
// 	},
// 	{
// 		firstName: 'Hera',
// 		grade: 72
// 	},
// 	{
// 		firstName: 'Apollo',
// 		grade: 90
// 	}
// ];

// for (let i = 0; i < student.length; i++) {
// 	console.log(`The name of student is ${student[i].firstName} and grade is ${student[i].grade}`);
// }

// let socialSite = [ 'Facebook', 'WhatsApp', 'Instagram', 'LinkedIn' ];
// for (let sites of socialSite) {
// 	console.log(sites);
// }

// let matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

// for (let i of matrix) {
// 	// let sum = 0;
// 	// for (let j of i) {
// 	// 	sum = sum + j;
// 	// }
// 	console.log(i);
// }

// Function

// function rollDie() {
// 	let number = Math.floor(Math.random() * 6 + 1);
// 	// console.log(number);
// 	return number;
// }
// let number = rollDie();
// while (number != 1) {
// 	number = rollDie();
// 	console.log(number);
// }

// Valid Password Checker
// function isValidPassword(userName, passWord) {
// 	if (passWord.length >= 8) {
// 		// console.log('1st');
// 		if (!passWord.includes(' ')) {
// 			if (!(passWord.indexOf(userName) !== -1)) {
// 				return true;
// 			}
// 		}
// 	} else {
// 		return false;
// 	}
// }

// let passWordChecker = isValidPassword('himanshuRawat', 'himanshu');

// if (passWordChecker) {
// 	console.log('Valid Password');
// } else {
// 	console.log('Invalid Password');
// }

// Write fuction to find the average value of an array of numbers;

// function avg(userArray) {
// 	let sum = 0;
// 	for (let arr of userArray) {
// 		sum += arr;
// 	}
// 	console.log(sum / userArray.length);
// }

// avg([ 10, 10, 10, 10 ]);
// Write a function to check wheather a sentence is Panagram or Not.

// function isPana(userSentence) {
// 	userSentence = userSentence.toLowerCase();
// 	let alphabet = 'abcdefghijklmnopqrstuvwxyz ';
// 	// for (let char of userSentence) {
// 	// 	// console.log(char);
// 	// 	for (let checkChar in alphabet) {
// 	// 		if (!(checkChar === char)) {
// 	// 			console.log('Not Panagram');
// 	// 			return false;
// 	// 		}
// 	// 	}
// 	// }
// 	let flag = 0;
// 	for (let i = 0; i < alphabet.length; i++) {
// 		flag = 0;
// 		for (let j = 0; j < userSentence.length; j++) {
// 			if (alphabet[i] === userSentence[j]) {
// 				console.log(`Alphabet: ${alphabet[i]} & USER: ${userSentence[i]}`);
// 				flag = 1;
// 				break;
// 			}
// 		}
// 		if (flag !== 1) {
// 			console.log('Not Panagram');
// 			return false;
// 		}
// 	}
// 	if (flag === 1) {
// 		console.log('Panagram');
// 		return true;
// 	}
// }

// isPana('The quick brown fox jumps over the lazy do');

// Deep Dive in Functions
// function lol() {
// 	let nitesh = 'Bakayeti';
// 	const himanshu = 'himayeti';
// 	var aman = 'udhad';
// }
// lol();
// if (true) {
// 	let name = 'ram';
// 	var last = 'singh';
// 	console.log(name);
// }
// console.log(last);
// if (true) {
// 	let firstName = 'John';
// 	var lastName = 'Doe';
// }
// // console.log(lastName);

// function callMyName() {
// 	let firstName = 'John';
// 	var lastName = 'Doe';
// }
// callMyName();
// console.log(lastName);

// Lexical Scoping

function firstName() {
	let first = 'John';
	function lastName(lName = ' Abrahim') {
		let last = lName;
		let fullName = first + last;
		console.log('Hello Mr. ' + fullName);
	}

	return lastName(' Wick');
}

let callReturn = firstName();
callReturn.last = 'Dravid';

// Fuction Expression

// Anonymous Function Expression
const sum = function(x, y) {
	return x + y;
};

sum(3, 4);

// Named Fucntion Expresssion.
const product = function multiply(x, y) {
	return x * y;
};

// Higher Order Functions
function sum(x, y) {
	return x + y;
}
let product = function(x, y) {
	return x * y;
};

let minus = function substration(x, y) {
	return x - y;
};

let operation = [ sum, product, minus ];

for (let func of operation) {
	console.log(func(34, 2));
}

let anyObject = {
	sumProduct: product
};

// High Order Functions  => Accepting Other Functions as arguments.
function laughNTimes(happy, times) {
	for (let i = 0; i < times; i++) {
		happy();
	}
}

function laugh() {
	console.log('hahahaha');
}

laughNTimes(laugh, 10);

// High Order Functions => Functions as Return Values
function makeBetweenFunc(start, end) {
	return function(ageChecker) {
		return ageChecker > start && ageChecker < 18;
	};
}
const isChild = makeBetweenFunc(0, 18);

// Callbacks & Hoisting

console.log(name);
var name = 'Hello World';

console.log(makeChicken());
var makeChicken = function() {
	console.log('Chicke is made');
};

makeChicken();

// ForEach

let array = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

function printTriple(n) {
	console.log(n * 3);
}
array.forEach(printTriple);

array.forEach(function(num) {
	console.log(num * 2);
});

// Map in Js
let oldFriends = [ 'Sam', 'Jake', 'Jousua', 'Mike', 'Rachel' ];
let oldFriendsFullName = oldFriends.map(function(lastName) {
	return lastName + ' Jackson';
});

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const evenOdd = numbers.map(function(num) {
	return { num: num, isEven: num % 2 == 0 ? true : false };
});
// console.log(evenOdd);

const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const abbrevation = words.map(function(addDot) {
	return addDot.toUpperCase().split('').join('.');
});
// console.log(abbrevation);

// Arrow Functions

const square = (num) => {
	console.log(num * num);
};

square(4);

const isEven = (checkNum) => {
	return checkNum % 2 === 0;
};

const multiply = (x, y) => {
	return x * y;
};

// Implicit return Arrow Functions

const square = (n) => n * n;

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const doubleNums = nums.map(function(n) {
	return n * 2;
});

const double1 = nums.map((n) => n * 2); // One Line Implicit Arrow Functions

const parityList = nums.map((n) => (n % 2 === 0 ? 'true' : 'false'));
const materials = [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium' ];

let oyo = materials.map((material) => material.length);

//  Find Functions
// Find Functions in JS

let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

const hMovie = movies.find((movie) => {
	return movie.includes('Mrsrr');
});

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36
	}
];

// Find Book whose rating is mare than 4.3 using arrow functions
const bookRating = books.find((goodRating) => {
	if (goodRating.rating > 4.3) {
		return goodRating;
	}
});
console.log(bookRating);

// Filter Function in JS

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const onlyOdd = nums.filter((n) => n % 2 == 1);

// Every Method in JS

const numbers = [ 2, 3, 5, 7, 11, 13, 133 ];

const checkPrime = numbers.every((num) => {
	let i;
	for (i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	if (i === num) {
		return true;
	}
});

// Some Method in JS
const numbers = [ 2, 3, 5, 7, 11, 13, 133 ];

const checkPrime = numbers.some((num) => {
	let i;
	for (i = 2; i < num; i++) {
		if (num % i !== 0) {
			return false;
		}
	}
	if (i === num) {
		return true;
	}
});

// Sort Method in Js

const prices = [ 400.5, 3000, 3000, 35.99, 12.0, 9500 ];

const arr1 = prices.sort((a, b) => b - a);
console.log(arr1);

//Reduce Array Method in JS

const numbers = [ 1, 2, 3, 4, 5 ];
const arrSum = numbers.reduce((accumulator, currentValue) => {
	console.log(accumulator + currentValue);
	return accumulator + currentValue;
});

console.log(arrSum);

const grades = [ 89, 96, 58, 77, 62, 93, 81, 99, 73 ];

const maxGradeIs = grades.reduce((max, currentValue) => {
	if (max > currentValue) {
		return max;
	} else {
		return currentValue;
	}
});

console.log(maxGradeIs);

const arr = [ 1, 2, 3, 4, 5 ];
const arrAdd = arr.reduce((accumulator, currentValue) => {
	console.log(accumulator + currentValue);
	return accumulator + currentValue;
}, 10);
console.log(`the sum of arr is ${arrAdd}`);

const votes = [ 'y', 'y', 'n', 'y', 'y', 'n', 'y', 'n' ];

const votingResults = votes.reduce((tally, val) => {
	if (tally[val]) {
		tally[val]++;
	} else {
		tally[val] = 1;
	}

	return tally;
}, {});

console.log(votingResults);

// Default Parameters

function add(x, y = 2) {
	console.log(x + y);
}
let numAlph = add(2, 'KING');
// console.log(typeof numAlph);
let x;
console.log(typeof x);
if (x === undefined) {
	console.log('TRUE');
}

// Spread Operator (...);

const nums = [ 1, 2, 3, 4, 5, 6 ];

let mx = Math.max(...nums);

function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

//  Using spread operator in function.
const arr = [ 'Apple', 'boy', 'Cat', 'Dog' ];
giveMeFour(...arr);

const cephalodos = [ 'asdf0', 'adf1', 'asdf2', 'asdf4', 'asd5' ];
const gastrapods = [ 'jkl0', 'jklj1', 'ljlj2', 'jkl;3' ];
const mollusac = [ ...cephalodos, ...gastrapods ];
const copyMollusac = [ ...cephalodos ];

const feline = {
	legs: 4,
	family: 'Felidae'
};
const canine = {
	family: 'Caninae',
	furry: true
};

const felineCanine = {
	...feline,
	...canine,
	ispet: true,
	aborable: true
};

const dog = {
	legs: 4,
	isPaltu: 'no',
	isCowrd: 'no'
};
const dogClone = { ...dog };
const dogClone2 = { ...dogClone };

// The Argument Object

function sumAll() {
	let total = 0;
	console.log(typeof arguments);
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	console.log(total);
}

// Rest Argument (Looks like spread but not!)

function sumToInfinite(...nums) {
	return nums.reduce((total, cV) => total + cV);
}

const fullNamme = (first, last, ...otherThings) => {
	otherThings = otherThings[0];
	console.log(`${first}, ${last} and the ${otherThings}`);
};

// Destructuring Arrays
const noUnique = [ 'hari wardi', 'babu ram', 'no3', 'tanki wala', 'nili wardi', 'mangal pandey' ];

const [ hariWardi, babuRam, ...bakiSab ] = noUnique;

const [ , no2, , , , tankiWala ] = noUnique;

// Destruturing Objects

const person = {
	name: 'Heisnberg',
	age: 45,
	profession: 'Scientist',
	isMarried: true
};

const { name: scientistName, isMarried, profession: JOB, age: Died } = person;

// Nested Destructuring

const friends = [
	{
		first: 'Abhishek',
		last: 'Paswan',
		passion: 'Art'
	},
	{
		first: 'Kuldeep',
		last: 'Das',
		passion: 'Electric Equipments'
	},
	{
		first: 'Prince',
		last: 'Yadav',
		passion: 'Playing PUBG'
	}
];

const [ { first: Artist, passion }, { first } ] = friends;

// param destructuring

function form({ first: name, last: title }) {
	console.log(`Thank you ${name} ${title}`);
}

const person = {
	first: 'John',
	last: 'Doe',
	age: 32,
	profession: 'SDE-1',
	isMarried: true
};

form(person);

// Computed Values in JS
// Common use to add a dynamic key in an object.
const blueColor = [ 'Facebook', 'LinkedIn' ];
const photoSharing = 'Instagram';

const webSite = {
	[photoSharing]: 'Pinkish and Blueish',
	[blueColor]: 'Social and Professional',
	Others: 'Anyone'
};

const internship = {
	Qualifications: 'B.E/ B.Tech',
	Duration: '3-Months',
	'Job-Title': 'Junior Web Developer'
};

function addDyanmicKeyAndValue(object, key, value) {
	return {
		[key]: value,
		...object
	};
}

// Adding Methods to Objects.
let decimal = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const math = {
	decimal: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
	sum: (...nums) => {
		return nums.reduce((total, cV) => total + cV);
	},
	product: (...nums) => nums.reduce((product, cV) => product * cV)
};

// Method Shorthand Syntax
const auth = {
	username: 'USERNAME',
	password: '********',
	logIn() {
		console.log('Yes Logged In');
	},
	logOut() {
		console.log('Yes Logged Out');
	}
};

//Intro To THIS keyword.

// console.log(this);

function printfInC() {
	console.log(`printf("Hellow World);`);
	// reference to the current execution scope
	// which in this case is window object
	console.log(this);
}

// USING THIS IN METHODS

const person = {
	first: 'Micheal ',
	last: 'Jackson',
	died: 2000,
	profession: 'Pop - Singer',
	print() {
		console.log(this.first + this.last);
	}
};

const singer = {
	first: 'Marshell',
	last: 'Mathers',
	nickName: 'Eminem',
	genre: 'Rapping',
	printInfo() {
		// Desturcturing Objects.
		console.log(this);
		let { first, last, nickName, ...albums } = this;
		albums = albums.albums.slice('');
		console.log(`The ${first} ${last} has stagename ${nickName} and his albums are ${albums}`);
	},
	albums: [ 'The Marshell Mathers LP', 'Revival', 'Relapse', 'Kamikaze' ],
	getInfo() {
		console.log(this);
		const fullName = this.printInfo();
	}
};

const getInfoFunc = singer.getInfo;

// Annoyomatic Demo

const annoyer = {
	phrases: [ 'Literally', 'cray cray', "i can't even", 'totes!', 'yolo', 'Cant stop', 'wont stop' ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {
		console.log(this);
		// console.log(this.pickPhrase());
		// const that = this;
		this.stopId = setInterval(() => {
			console.log(this);
			// console.log(this);    ****Very Important****
			// when using arrow function it does not gets its own this
			// instead get its this from local execution context
			//  or parent this
			console.log(this.pickPhrase());
		}, 2000);
	},
	stop() {
		clearInterval(this.stopId);
	}
};
