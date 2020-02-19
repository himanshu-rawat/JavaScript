// Creating Element from scratch in DOM.
// Creating Element in DOM
const h2 = document.createElement('h2');

h2.innerText = 'I love my country!';
h2.classList.add('myClass');

let section = document.querySelector('section');

section = section.appendChild(h2);

// console.log(h2);
// console.dir(h2);

let myIMG = document.createElement('img');
myIMG.setAttribute(
	'src',
	'https://images.unsplash.com/photo-1577992443472-c9a4f44e8172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
);
myIMG.alt = 'time';

const p = document.querySelector('p');
p.appendChild(myIMG);
console.log(myIMG);

const newLi = document.createElement('li');
newLi.textContent = 'The Rudest Book Ever';

const parentUL = document.querySelector('ul');
const firstChildUL = document.querySelector('ul li');
parentUL.insertBefore(newLi, firstChildUL);

// innerText
// textContent
// innerHTML

// const form=document.querySelector('form');
// form.innerHTML= ` <h1>I am the Form </h1> `;

function vAndC(s) {
	// const string = [ ...s ];
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	for (let char of s) {
		if (vowels.includes(char)) {
			console.log(char);
		}
	}
	for (let char of s) {
		if (!vowels.includes(char)) {
			console.log(char);
		}
	}
	// const arrVowels = [];
	// for (let i = 0; i < string.length; i++) {
	// 	for (let j = 0; j < vowels.length; j++) {
	// 		// console.log(string[i] + ' ' + vowels[j]);
	// 		if (string[i] === vowels[j]) {
	// 			console.log(string[i]);
	// 			arrVowels.push(string[i]);
	// 			break;
	// 		}
	// 	}
	// }
	// for (let i = 0; i < string.length; i++) {
	// 	let flag = 0;
	// 	for (let j = 0; j < arrVowels.length; j++) {
	// 		if (string[i] === arrVowels[j]) {
	// 			flag = 0;
	// 			break;
	// 		} else {
	// 			flag = 1;
	// 		}
	// 	}
	// 	if (flag) {
	// 		console.log(string[i]);
	// 	}
	// }
}
// vAndC('javascriptsloops');

// let r = readLine();

function getLetter(s) {
	let letter;
	// Write your code here
	let char = s[0];
	// console.log(char);
	// console.log('aeiou'.includes(char));
	switch (char) {
		case 'aeiou'.includes(char):
			letter = 'A';
			break;
		case 'bcdfg'.includes(char):
			letter = 'B';
			break;
	}

	return letter;
}

// Creating Element in DOM
const h2 = document.createElement('h2');

h2.innerText = 'I love my country!';
h2.classList.add('myClass');

let section = document.querySelector('section');

section = section.appendChild(h2);

// console.log(h2);
// console.dir(h2);

let myIMG = document.createElement('img');
myIMG.setAttribute(
	'src',
	'https://images.unsplash.com/photo-1577992443472-c9a4f44e8172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
);
myIMG.alt = 'time';

const p = document.querySelector('p');
p.appendChild(myIMG);
console.log(myIMG);

const newLi = document.createElement('li');
newLi.textContent = 'The Rudest Book Ever';

const parentUL = document.querySelector('ul');
const firstChildUL = document.querySelector('ul li');
parentUL.insertBefore(newLi, firstChildUL);

const li1 = document.createElement('li');
li1.innerText = 'Selling on Amazon';
const li2 = document.createElement('li');
li2.innerText = 'Selling on Flipkart';

parentUL.prepend(li1, li2);

// Deleting The Element from DOM

let delKing = document.querySelector('ul');
delKing.removeChild(li1);

// Adding Events to the DOM

// const btn = document.querySelector('#btn');
// btn.onclick = function() {
// 	alert('Clicked');
// };

// btn.addEventListener('click', function() {
// 	alert('clicked');
// });
// btn.addEventListener('click', function() {
// 	alert('second thing');
// });

// btn.addEventListener('mouseover', function() {
// 	btn.innerText = 'I am new one';
// });
const colors = [ 'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red' ];
const box = document.querySelector('#boxes');
const changeColor = function(e) {
	console.log(e);
	document.body.style.backgroundColor = this.style.background;
};

for (let color of colors) {
	const div = document.createElement('div');
	div.style.background = color;
	box.appendChild(div);
	div.addEventListener('click', changeColor);
}

// The Event Object (event)
document.body.addEventListener('keypress', function(event) {
	console.log(event);
});

// Key Events :keypress, keydown, keyup
const input = document.querySelector('#username');
input.addEventListener('keydown', function(e) {
	console.log('down');
});
input.addEventListener('keyup', function(e) {
	console.log('Key UP');
});
input.addEventListener('keypress', function() {
	console.log('key press');
});



// Simple Todo list -> Adding Task Only.
// 
const ul = document.querySelector('ul');
const wishlist = document.querySelector('#wishlist');
wishlist.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		if (!this.value) return;
		const li = document.createElement('li');
		li.innerHTML = this.value;
		ul.appendChild(li);
		this.value = '';
	}
});


// Form Events and preventDefault().

const form=document.querySelector("#signup-form");

const cc=document.querySelector("#cc");
const terms=document.querySelector('#terms');
const veggie=document.querySelector('#veggie');
const arr=[cc,terms,veggie];
form.addEventListener('submit',function(e){
	e.preventDefault();
	// console.log("Submitted The Form");
	// console.log('cc',cc.value);
	// console.log('terms',terms.checked);
	// console.log('veggie',veggie.value);
	
})

Detecting The Chane in Form or Data
Using onchange (change) and oninput (input);

const formData={};
for(let input of arr){
	input.addEventListener('input',({target})=>{
		// console.log(target.name)
		formData[target.name]=target.value;
	})
}