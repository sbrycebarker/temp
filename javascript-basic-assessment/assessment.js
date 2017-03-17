
// #1 Create a variable called hello and assign it the string 'goodbye'

var hello = "goodbye";


// #2 Use the variable iLove to create a new variable called iLoveCode that is assigned the string "I love code"
var iLove = 'I love';

var iLoveCode = iLove + " code";

// #3  Make an object called bob and give it the following properties
// bob has a height of 6ft (string)
// bob has an age of 24 (Number)
// bob has hair, that has style spikey, and color brown (object)
// bob is not presidentOfTheUnitedStates (boolean)
// bob likes apples, bananas, and cherries (array of strings)

var bob = {
	height: "6ft",
	age: 24,
	hair: {
		style: "spikey",
		color: "brown"},
	presidentOfTheUnitedStates: false,
	likes: ["apples", "bananas", "cherries"]
};


// #4 Change my shirt color to pink using dot notation
var myShirt = {
	type: 'polo',
	color: 'red'
};

// Change my shirt type to spandex using square bracket notation
var myOtherShirt = {
	type: 'polo',
	color: 'red'
};

// #5 Create an object that tracks a count of animals in a zoo.  Call it 'zoo'
// The key should be the animal name(string) and the value should be how many there are.
// Our zoo has 8 monkeys, 4 giraffes and 2 elephants


// #6 Loop through this object and change all keys that start with the letter s to have a value of 's'

var snake = {
	sliters: 'sideways',
	eats: 'rodents',
	says: 'ssss',
	smells: 'heat',
	runs: 'legless'
};

function sLoop() {
	for (var key in snake) {
		if (key[i][0] == 's' ) {
			key = 's'
		}
	}
}

// for (var variable in object) {
// 	if (object.hasOwnProperty(variable)) {
//
// 	}
// }

//#7 Create an array of strings that are the 7 primary colors in the rainbow - red, orange, yellow, green, blue, indigo, violet (lower-case). Call your array rainbowColors

var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

var heroes = ['superman', 'batman', 'flash'];
// add 'wonderwoman' to the end
function add() {
	heroes.push('wonderwoman')
	heroes = heroes
	return heroes;
}

add();
// remove 'superman' and store him in a variable called firstHero

function manOfSteel() {
	var firstHero = heroes.shift();
	console.log(firstHero);
}
// add 'spongebob' to the start of the array
function spongebob() {
	heroes.unshift("spongebob");
}

spongebob();

console.log(heroes)
// remove 'flash' from the array and store him in a variable called secondHero

// leave batman in the array but put a copy of him on a variable called thirdHero

function batman() {
	thirdHero = heroes.slice(2,3)
}

batman();
console.log(heroes);
console.log(thirdHero);



// #9 Write a function called addItem that takes in an array and an item, adds the item to
// the array, and returns the array with the added item.

function addItem(array, item ) {
	array.push(item);
	return array;
}
// #10 Write a function called removeItem that takes in an array of strings, and a string.

function removeItem(a, s) {
	a = [''];
	s = '';
	for ( var i = 0; i < a.length; i++) {
		if ([i] = s) {
			a = a.splice([i],1)
			return a;
		}
	}
}

// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed

// #11 Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'

function doubleTheFun(a) {
	var a = a + a;

	return a;

}

// #12 Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corresponds to the property

function getValueOfProperty() {
	var thing = {
	property: 'whatever'
}
	return thing.prototype.valueOf(thing)
}

// getValueOfProperty();


// #13 Write a function called makeChatMessage that takes in a message and author as parameters
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object

// #14 Create a function called coderTest that takes in an object that is a person. It looks to see if the person’s name is Jeremy and then changes the person object to have a property called lovesCode with a value of 10.  If their name is Brack set lovesCode to 0.  otherwise set lovesCode to 5.


// #15 Create a function called outside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icecicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/

// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the argument string(back) + ' back'."
// example - If I call you with 'Give it' you should invoke holla with 'Give it back'
