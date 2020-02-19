/*
******Asynchronous Code, Callbacks & Promises******
*/
/*
Call Stack in Dev Tools
*/
function multiply(a, b) {
	return a * b;
}

function square(num) {
	return multiply(num, num);
}

function isRightAngled(a, b, c) {
	return square(a) + square(b) === square(c);
}

/*
    JS is Single Threaded
*/

console.log('I am first');
setInterval(function() {
	// console.log(" i am third")
}, 0);
console.log('i am second');

/*
Welcome to Callback Hell
*/

const btn = document.querySelector('button');
setTimeout(() => {
	btn.style.transform = `translateX(100px)`;
}, 1000);

const posts = [
	{
		title: 'Post One',
		body: 'This is post one'
	},
	{
		title: 'Post Two',
		body: 'This is post two'
	}
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		for (post of posts) {
			output += `<li>${post.title}</li>`;
		}
		document.body.innerHTML = output;
	}, 0);
}

function createPost(post, cb) {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 1000);
}

createPost({ title: 'Post Third', body: 'THis is third post' }, getPosts);

/* 
Promises Intro
*/

const isCelebrate = new Promise((resolve, reject) => {
	const rand = Math.random();
	if (rand > 0.5) {
		resolve();
	} else {
		reject('ERR: Something Went Wrong');
	}
});
function wedding() {
	console.log('Yey we made our wedding day.');
}
isCelebrate.then(wedding).catch((event) => {
	console.log(event);
});

//  Returning Promises from function
const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
};

makeDogPromise()
	.then(() => {
		console.log('Yay we got a dog');
	})
	.catch(() => {
		console.log(':< NO DOGGG !!!');
	});

// Resolving, Rejecting with Values

const fakeRequests = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				user: {
					id: 1,
					username: 'aslirawat'
				},
				'user/1': {
					upVotes: 365,
					city: 'goa'
				},
				'user/5': {
					upVotes: 4343,
					city: 'delhi'
				},
				'city/goa': {
					title: 'The Party City',
					tagLine: 'where strees go out'
				},
				'city/goal': {
					title: 'Wining Country',
					tagLine: 'where strees go out'
				}
			};
			if (pages[url]) {
				resolve(pages[url]);
			} else {
				reject('Not Found');
			}
		}, 1000);
	});
};

/* 
    The Delights of Promise Chaining
*/
fakeRequests('user')
	.then((response) => {
		console.log(response);
		const userId = response.id;
		return fakeRequests(`user/${userId}`);
	})
	.then((response) => {
		console.log(response);
		const city = response.city;
		return fakeRequests(`city/goal`);
	})
	.then((response) => {
		console.log(response);
		console.log(response.title);
		console.log(response.tagLine);
	})
	.catch((err) => {
		console.log(err);
	});

/*
*******Making HTTP Requests******
*/

// Intro to AJAX

// XMLHttpRequest

const reqObj = new XMLHttpRequest();

reqObj.open('GET', 'https://swapi.co/api/planets');

reqObj.send();

reqObj.addEventListener('load', function() {
	console.log('It Worked !!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.open('GET', filmURL);
	filmReq.send();
	filmReq.addEventListener('load', function() {
		console.log('It Worked');
		const filmData = JSON.parse(filmReq.responseText);
		console.log(filmData);
	});
});
reqObj.addEventListener('error', () => {
	console.log('ERROR!!!!');
});

console.log('Request Send !');

// Fetch & Chaining Fetch

fetch('https://swapi.co/api/planets')
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Status Code ERROR: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});

// Refactoring The Fetch Chain Using Functions

const checkAndParse = function(response) {
	if (!response.ok) throw new Error(`Status COde Error : ${response.status}`);
	return response.json();
};
const printPlanets = (data) => {
	console.log('Loaded 10 More Planets');
	for (let planets of data.results) {
		console.log(planets.name);
	}

	return Promise.resolve(data.next);
};
const fetchNextPlanets = (url = 'https://swapi.co/api/planets') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkAndParse)
	.then(printPlanets)
	.catch((error) => {
		console.log(error);
	});

// Axios - A library for making http requests

const fetchPlanets = (url = 'https://swapi.co/api/planets') => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	// console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchPlanets()
	.then(printPlanets)
	.then(fetchPlanets)
	.then(printPlanets)
	.then(fetchPlanets)
	.then(printPlanets)
	.then(fetchPlanets)
	.then(printPlanets)
	.then(fetchPlanets)
	.then(printPlanets)
	.catch((error) => {
		console.log(error);
	});

/*
*******Async & Await : JS Magic******
*/

// The Async Keyword.

function getPlanet() {
	console.log('Here');
	return axios.get('https://swapi.co/api/planets');
}

getPlanet().then((result) => {
	console.log(result.data);
});

// The Await Keyword
async function getPlanet() {
	const res = await axios.get('https://swapi.co/api/planets');
	console.log(res.data);
}
getPlanet();

// Erron Handling In Async Functions
// Using try{} and catch{}

async function getPlanet() {
	try {
		const res = await axios.get('https://swapi.co/api/planetsOfThe');
		console.log(res.data);
	} catch (error) {
		console.log('Error ', error);
	}
}
getPlanet();

// Multiple Await

// Parallel Vs Sequential Requests

// Sequential Requests
async function get3Pokemon() {
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}
get3Pokemon().catch((err) => {
	console.log(err);
});

// Parallel Requests
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}
get3Pokemon();

// Refactoring with Promise.all()

async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

	const result = await Promise.all([ prom1, prom2, prom3 ]);
	for (let poke of result) {
		console.log(poke.data.name);
	}
}
get3Pokemon();

/*
	Prototypes, Classes & The New Operator
*/

// Instructor Switch - Johnas

// Function Constructor

const Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

// Adding method to prototype property
// Using Inheritance

// Person.prototype.print = function() {
// 	console.log(`${this.name} is ${2019 - this.yearOfBirth} years old and work as ${this.job}`);
// };
// const john = new Person('John', 1990, 'techer');
// // instance of Person Object
// console.log(john);

// const lara = new Person('Lara', 1998, 'Chemist');

// const arr = [ 1, 2, 3, 4, 5 ];

// console.log(new Person('ram', 1999, 'god'));

// Creating Object Using Object.create()

// const presonProto = {
// 	calculateAge: function() {
// 		console.log(2019 - this.yearOfBirth);
// 	}
// };

// const john = Object.create(presonProto, {
// 	name: { value: 'John' },
// 	yearOfBirth: { value: 1990 },
// 	job: { value: 'Designer' }
// });

// Primitives Vs Object

// // Primitives (COPY)
// let firstName = 'John';
// let name = firstName;
// firstName = 'Jane';

// console.log(firstName);
// console.log(name);

// // Object (REFERENCE)
// let marks = [ 9, 6, 7, 8 ];
// let studentMarks = marks;

// marks.pop();
// console.log(marks);
// console.log(studentMarks);

// let person = {
// 	name: 'John',
// 	age: 23
// };
// let john = person; // Refernce to the person

// person.name = 'Jane';
// console.log(person);
// console.log(john);

// IIFE - Immediately Invoke Function Expression

// (function(name) {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// 	console.log(name);
// })('AMAN');

/* 
	Closers
		An inner functions has always access to the variables and parameters 
		of its outer function, even after the outer function 
		has returned.
*/

// function sum(a, b) {
// 	const add = a + b;
// 	return function square() {
// 		return add * add;
// 	};
// }

// Again with COLT STEELE

// The Factory Function

// Constructor Function

/*
	The new keyword does the following things:

		Creates a blank, plain JavaScript object;
		Links (sets the constructor of) this object to another object;
		Passes the newly created object from Step 1 as the this context;
		Returns this if the function doesn't return its own object.
*/

// JS Classes - Syntatical Sugar

class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	printRGB() {
		const { r, g, b } = this;
		console.log(`rgb(${r},${g},${b})`);
	}
}

// const c1 = new Color(255, 67, 29, 'Tomato');
// c1.printRGB();

// Extends , Super and Subclasses

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	print() {
		return `${this.name} is eating`;
	}
}

class Cat extends Pet {
	constructor(name, age, skill) {
		super(name, age);
		this.skill = skill;
	}
	data() {
		console.log(this.skill);
	}
	meow() {
		return 'MEOWWWW !';
	}
}

class Dog extends Pet {
	bark() {
		return `WOOOFFF !`;
	}
}

const Billy = new Cat('Billy', 6);

const Rambo = new Dog('Rambo', 7);
