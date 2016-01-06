//Using the JavaScript language, have the function 
//SimpleSymbols(str) take the str parameter being passed and determine if it is an
// acceptable sequence by either returning the string 
//true or false. The str parameter will be composed 
//of + and = symbols with several letters between them 
//(ie. ++d+===+c++==a) and for the string to be true 
//each letter must be surrounded by a + symbol.
// So the string to the left would be false. The string 
//will not be empty and will have at least one letter. 



function SimpleSymbols(str) { 

	//   // code goes here  
	return str;

}
   
// // keep this function call here 
// // to see how to enter arguments in JavaScript scroll down
// SimpleSymbols(readline());                            



// //---------------------------------------------------

function paperRockScissors() {
	// play1: "paper",
	// play2: "rock",
	// 3: "scissors",
	this.play = function () {
		var userChoice = prompt("Rock, paper, or scissors?(lowercase please :)");
		var counter = Math.floor((Math.random() * 3) + 1);
		if (userChoice === "paper" && counter === 1) {
			alert("You picked paper and the computer picked paper!");
			alert("It's a tie!");
			return;
		} else if (userChoice === "paper" && counter === 2) {
			alert("You picked paper and the computer picked rock!");
			alert("You win!");
			return;
		} else if (userChoice === "paper" && counter === 3) {
			alert("You picked paper and the computer picked scissors!")
			alert("You lose!");
			return;
		} else if (userChoice === "rock" && counter === 1) {
			alert("You picked rock and the computer picked paper!");
			alert("You lose!");
			return;
		} else if (userChoice === "rock" && counter === 2) {
			alert('You picked rock and the computer picked rock!');
			alert("It's a tie!");
			return;
		} else if (userChoice === "rock" && counter === 3) {
			alert("You picked rock and the computer picked scissors!");
			alert("You win!");
			return;
		} else if (userChoice === "scissors" && counter === 1) {
			alert("You picked scissors and the computer picked paper!");
			alert("You win!");
			return;
		} else if (userChoice === "scissors" && counter === 2) {
			alert("You picked scissors and the computer picked rock!");
			alert("You lose!");
			return;
		} else if (userChoice === "scissors" && counter === 3) {
			alert("You picked scissors and the computer picked scissors!");
			alert("It's a tie!");
			return;
		}
	}
};

var game = new paperRockScissors();
game.play();

// //---------------------------------


function rockPaperScissors() {
	this.play = function (userChoice) {
		var counter = Math.floor((Math.random() * 3) + 1);
		if (userChoice === "rock") {
			userChoice = 2;
		} else if (userChoice === "paper") {
			userChoice = 1;
		} else {
			userChoice = 3;
		};
		if (userChoice === counter) {
			alert("It's a tie!");
			return;
		} else if (userChoice < counter) {
			alert("You win!");
			return;
		} else if (userChoice > counter) {
			alert("You lose!");
			return;
		}
	}
}
var game = new rockPaperScissors();
game.play("rock");



//Write a function that takes an array and replaces all of the odd numbers with the letter ‘O’.

var replace = function (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			arr[i] = 'O';
		}
	}
	return arr;
}

var myArray = [1, 2, 3, 4, 5, 6];
replace(myArray);


//---------------------------------------
//playing with map

var a = [1, 2, 3, 4, 5, 6];
a.map(function (e) {
	e += 10;
});

//------------------------------------------
var a = [1, 2, 3, 4, 5, 6];
a.filter(function (e) {
	return e % 2 === 0;
});//runs a test. notice that i did not use an if statement and it still works swimmingly



//----------------------
var a = [1, 2, 3, 4, 5, 6];
a.reduce(function (acc, e) {
	return acc + e;
});

//-----------------------------------------------------

// Factorial: Write a function that takes in a number and returns the factorial of that number

// . Ex: factorial(5) returns 120 because 5 * 4 * 3 * 2 * 1 === 120

var factFunc = function (num) {
	if (typeof (num) !== "number" || num < 0) {
		throw ("ERROR BREH");
	}
	for (var i = num - 1; i > 0; i--) {
		num *= i;
	}
	return num;
};

//----------------------------------

var factorial = function (num) {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}
 
//----------------------------------------------------------

// have the function divisionStringified(num1,num2) 
// take both parameters being passed, divide num1 by 
// num2, and return the result as a string with properly
//  formatted commas. If an answer is only 3 digits long,
//   return the number with no commas (ie. 2 / 3 
//   should output "1"). For example: if num1 is 123456789
//    and num2 is 10000 the output should be "12,345".

// Gabriel [9:21 AM]
// Remove any decimals that result from the division

function divisionStringified(num1, num2) {
	var result = num1 / num2;

	result = Math.floor(result);
	var str = result + '';

	var resultArray = str.split('');
	if (resultArray.length > 3) {
		resultArray.splice(1, 0, ",");
	}
	resultArray = resultArray.join('');
	result = resultArray;
	return result;

}
//-------------------------------------------------------------

// // Write a Function called simpleSymbols that takes in a
//  string parameter and determines if it is an

// // acceptable sequence by either returning the string true
//  or false. The str parameter will be

// // composed of + and = symbols with several letters 

// between them (ie. ++d+===+c++==a) and for the

// // string to be true each letter must be surrounded by a
//  + symbol. So the string to the left would be

// // false. The string will not be empty and will have at least one letter.

function simpleSymbols(str) {
	if (/[a-z]/.test(str[0])) {
		return false;
	}

	var value;

	for (var i = 1; i < str.length; i++) {
		if (str[i] === /[a-z]/) {
			if (/str/.test("+[str[i]]+")) {
				value = true;
			} else {
				value = false;
			}
		}
	}
	return value;
}
////----------the about attempt is failing

function simpleSymbols2(str) {
	var result;
	var strArray = str.split('');
	if (/[a-zA-Z]/.test(str[0]) || /a-zA-Z/.test(str[str.length - 1])) {
		return false;
	}
	var myFunc = strArray.every(function () {
		if ([/a-zA-Z]/.test(strArray[i])){
			if (/\+/.test(strArray[i - 1]) && /\+/.test(strArray[i + 1])) {
				result = true;
			} else {
				result = false;
			}

		}
	})
	return result;
}
/////still failing above going to try again

function simpleSymbols3(str) {
	var result;
	var strArray = str.split('');
	if (/[a-zA-Z]/.test(str[0]) || /a-zA-Z/.test(str[str.length - 1])) {
		return false;
	}
	for (var i = 1; i < strArray.length - 2; i++) {
		if (/a-zA-Z/.test(strArray[i])) {
			if (/\+/.test(strArray[i - 1]) && /\+/.test(strArray[i + 1])) {
				result = true;
			} else {
				result = false;
			}
		}
	}
	return result;
}
///-----------------------gabe's way of doing it
function simpleSymbols4(str) {
	if (typeof str !== 'string' || !/[a-zA-Z]/.test(str)) {
		throw 'error: please pass at least one letter of the alphabet';
	}

	var splitStr = str.split('');
	if (/[a-zA-Z]/.test(splitStr[0]) || /[a-zA-Z]/.test(splitStr[splitStr.length - 1])) {
		return 'false';
	}

	var acceptable = splitStr.every(function (e, i, arr) {
		return !/[a-zA-Z]/.test(e) || (/[a-zA-Z]/.test(e) && /\+/.test(arr[i - 1]) && /\+/.test(arr[i + 1]));
	});

	return acceptable ? 'true' : 'false';
}
//------------------------------------------------------------------------
   
//take a string and will return true if only numbers or underscore, anything else
// is false
   
var myFunc = function (str) {
	if (/d/.test(str) || /[_]/.test(str)) {
		return true;
	} else {
		return false;
	}
}
   
//-------------
   
var myFunc2 = function (str) {
	var result;
	var splitStr = str.split('');
	for (var i = 0; i < splitStr.length; i++) {
		if (/\d/.test(splitStr[i]) || /_/.test(splitStr[i])) {
			result = true;
		} else {
			result = false;
		}
	}
	return result;

}
//-----------------
var myFunc3 = function (str) {
	var result;
	var splitStr = str.split('');
	for (var i = 0; i < splitStr.length; i++) {
		if (/[^0-9_]/.test(splitStr[i])) {
			return false;
		} else {
			result = true;
		}
	}
	return result;
}//yaya this one finally works!!


//now try and only accept strings in the format of an email

var acceptEmail = function (str) {

}

//-------------------------------------------------------------

// Using the JavaScript language, have the
// function letterChanges(str) take the 
//str parameter being passed and modify it
// using the following algorithm: Capitalize
// every vowel in this new string 
//(a, e, i, o, u) and return this modified string.

function letterChanges(str) {

	if (typeof str !== 'string' || str.length === 0) {
		alert('you gotta do better than that pal');
		return;
	}



	var splitStr = str.split('');
	var newArr = [];
	splitStr.forEach(function (e, i, arr) {
		if (/[aeiou]/.test(e)) {
			newArr.push(arr[i].toUpperCase());
		} else {
			newArr.push(arr[i]);
		}
	});

	var newString = newArr.join('');
	return newString;
};
//It works!!-------------------------------------------


//next prob
// Create a function that takes a 
//string and returns an integer, which
// represents the total number of digits 
//(0-9) and letters of the alphabet 
//(A-Z and a-z) that it contains. Use regular expressions and a forEach.



//-------------------------------------------------------


// Using the JavaScript language, have the 
//function division(num1,num2) take both parameters
// being passed and return the Greatest Common
//
// Factor. That is, return the greatest number 
//that evenly goes into both numbers with no
// remainder. For example: 12 and 16 both are
// divisible by 1, 2, and 4 so the output should 
//be 4. The range for both parameters will be from 1 to 10^3.

function division(num1, num2) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		alert("try harder pal");
		return;
	}
	for (var i = num1 <= num2 ? num1 : num2; i > 0; i--) {
		if (num1 % i === 0 && num2 % i === 0) {
			return i;
		}
	}
}

//---------------------------------------------------------
//Using the JavaScript language, have the function
// primeMover(n) return the nth prime number. For 
//example: if n is 16 the output should be 53 as 
//53 is the 16th prime number.


//Note: you should probably split this last problem 
//in two functions: a 'prime number detector' helper
// function, and the main function.


//Note2: prime numbers can only be divided by themselves 
//or one (leaving no remainder)


// -------------------------------------------------------------



// Using the JavaScript language, have the 
//function swapCase(str) take the str parameter
// and swap the case of each character. For 
//example: if str is "Hello World" the output
// should be hELLO wORLD. Let numbers and symbols
// stay the way they are.

function swapCase(str) {
	var splitStr = str.split('');
	var newArr = [];
	splitStr.forEach(function (e) {
		if (/[A-Z]/.test(e)) {
			newArr.push(e.toLowerCase());
		} else if (/[a-z]/.test(e)) {
			newArr.push(e.toUpperCase());
		}
	})
	var newStr = newArr.join('');
	return newStr;
}


//-------------------------------------------------------------------

// Using the JavaScript language, have the function
// powersOfTwo(num) take the num parameter being passed
// which will be an integer and return the string true 
//if it's a power of two. If it's not return the string
// false. For example if the input is 16 then your program
// should return the string true but if the input is 22 then
// the output should be the string false.


function powersOfTwo(num) {
	//var counter = 2;    can't reset the counter every time
	if (counter === num) {
		return true;
	} else if (counter > num) {
		return false;
	} else {
		powersOfTwo(counter * 2);
	}
}

//---------------------------not finished

function powersOfTwo2(num) {
	if (num === 2) return true;
	else if (num % 2 === 0) return powersOfTwo(num / 2);
	else return false;
}
   
//-----------------^gabe's answers--------------------------------











// Using the JavaScript language, have 
//the function stringScramble(str1,str2)
// take both parameters being passed and 
//return true if str1 contains all characters
// in str2, otherwise return false. For example: 
//if str1 is "rkqodlw" and str2 is "world" the
// output should return true. Punctuation and 
//symbols will not be entered with the parameters.

function stringScramble(str1, str2) {
	var splitStr1 = str1.split('');
	var splitStr2 = str2.split('');
	return splitStr2.every(function (e) {
		return splitStr1.indexOf(e) !== -1;
	});
}

//--------complete---------------------------------------


//Create a function that takes an array and returns 
//true if all the elements of the array are equal; false otherwise.

//It follows the pattern of: if we are running out of elements: return 
//true; else if the head of the array is not equal to the following 
//element, return false; else call the function recursively on the tail of the array.

//Head is the first element, tail is all elements minus the head

function bombArray(arr) {

}

//--------------------------------------------------------

// write an isArrayAcceptable function

//if passed an array, non-empty, of integers greater
// than zero, can't be all equal... returns true
//else returns false

function isArrayAceeptable(arr) {
	var cantBeEqualArr = [];
	if (Array.isArray(arr) && arr.length > 0) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 0 && arr[i] % 1 === 0) {
				var acceptable = true;
				cantBeEqualArr.push(arr[i]);

			} else {
				return false
			}
		}
	} else {
		return false;
	}

	return acceptable;
}

//-------------------------solve the can't be equal part with recursion

function equalFinder(arr) {
	arr.every(function (e) {

	})
}

//----------------------------------------------

//An easy one to get started


// Using the JavaScript language, have the function vowelCount(str)
// take the str string parameter being passed and return the number 
//of vowels the string contains (ie. "All cows eat grass" would return 5).

function vowelCount(str) {
	var counter = 0;
	var splitStr = str.split('');
	splitStr.forEach(function (e) {
		if (/[AEIOUaeiou]/.test(e)) {
			counter++;
		}
	})
	return counter;
}

//And then...


// Using the JavaScript language, have the function
// timeConvert(num) take the num parameter being 
//passed and return the number of hours and minutes 
//the parameter converts to, in the 'digital' format(ie.
// if num = 63 then the output should be the string 1:03).

function timeConvert(num) {

	var hr = Math.floor(num / 60);
	var min = num % 60;

	if (min < 10) {
		min = '0' + min;
	}

	return hr + ':' + min;
}

//--------------------------------------------

//Using the JavaScript language, have the function numberSearch(str) 
//take the str parameter, search for all the numbers in the string, 
//add them together, then return that final number. For example: if
// str is "88Hello 3World!" the output should be 91. You will have to
// differentiate between single digit numbers and multiple digit numbers
// like in the example above. So "55Hello" and "5Hello 5" should return two
// different answers. Each string will contain at least one letter or symbol.

function numberSearch(str) {


}
  
//Do you remember recursion? Give recursive solutions to the following problems:


//Function that takes an array of integers and returns 
//an integer which is the sum of all elements
function addThemUp(arr) {
	if (arr.length === 1) return arr[0];

	arr[1] = arr[0] + arr[1];

	return addThemUp(arr.slice(1));
}

// Function that takes an array of strings 
//returns a string which is the original strings
// concatenated together, with spaces between them
//NEW MESSAGES
function addTheStrings(arr) {
	if (arr.length === 1) return arr[0];

	arr[1] = arr[0] + ' ' + arr[1];

	return addTheStrings(arr.slice(1));
}



//Function that takes ANY number of arrays, and 
//returns an array which is the concatenation of 
//the original arrays (might want to use the arguments seudo-array)




//------------------------------------------
//You are working on a video game. Create contructor functions for:

//Hero: has name, life points, preferred weapon.
//Heroes can eat (increases life points), punch, attack with
// weapon (both of which decrease opponents' life points).
// These methods will be inherited from the Hero's prototype.

function Hero(name, lifePoints, weapon) {
	this.name = name;
	this.health = lifePoints;
	this.weapon = weapon;
}

Hero.prototype.eat = function (food) {//depending on what food health increases by certain amount
	return this.health += food;
	console.log("health: " + this.health);
	console.log('Hero gained health!');
}
Hero.prototype.punch = function (Troll) {
	Troll.health -= 10;
	console.log("health: ", Troll.health);
	console.log(this.name + ' punched ' + Troll.name);
}
Hero.prototype.attack = function (Troll) {
	Troll.health -= 30;
	console.log('Troll was attacked by Hero!');
	console.log("health: " + Troll.health);
}

//Troll: has battle-name, life points, preferred weapon.
//Trolls can eat heroes (increases life points), grunt,
// bite, attack with weapon (both of which decrease opponents'
// life points). These methods will be inherited from the Troll's prototype.

function Troll(name, lifePoints, weapon) {
	this.name = name;
	this.health = lifePoints;
	this.weapon = weapon;
}
Troll.prototype.eatHero = function (Hero) {
	Hero.health = 0;
	console.log(this.name + ' ate ' + Hero.name);
	Hero = {};
}
Troll.prototype.bite = function (Hero) {
	Hero.health -= 20;
	console.log('Troll bit Hero!');
	console.log('health :' + Hero.health);
}
Troll.prototype.attack = function (Hero) {
	Hero.health -= 30;
	console.log('health :', Hero.health);
	console.log('Troll attacked Hero!');
}

//When you finish add more complexity!

//--------------------------------------

//var counter = getCounter();

//counter(); //2

//counter(); //4

//counter(); //6

//counter(); //8

//counter(); //10

function getCounter() {
	var counter = 0;
	return function inner() {
		return counter += 2;
	}
}


//--------------------------------------

// Using the JavaScript language, have the 
//function ABCheck(str) take the str parameter
// being passed and return the string true 
//if the characters a and b, in that order,
// are separated by exactly 3 places anywhere 
//in the string at least once (ie. "lane 
//borrowed" would result in true because there 
//is exactly three characters -that aren't 
//a or b- between a and b). Otherwise return the string false.


function ABChecker(str) {

	var lowercaseStr = str.toLowerCase();

	if (lowercaseStr.length < 5) return false;

	for (var i = 0; i < lowercaseStr.length; i++) {
		if (lowercaseStr[i] === 'a') {
			if (lowercaseStr[i + 1] !== 'b' && lowercaseStr[i + 1] !== 'a'
				&& lowercaseStr[i + 2] !== 'b' && lowercaseStr[i + 2] !== 'a'
				&& lowercaseStr[i + 3] !== 'b' && lowercaseStr[i + 3] !== 'a'
				&& lowercaseStr[i + 4] === 'b') {
				return true;
			}
		}
	}
	for (var i = 0; i < lowercaseStr.length; i++) {
		if (lowercaseStr[i] === 'b') {
			if (lowercaseStr[i + 1] !== 'b' && lowercaseStr[i + 1] !== 'a'
				&& lowercaseStr[i + 2] !== 'b' && lowercaseStr[i + 2] !== 'a'
				&& lowercaseStr[i + 3] !== 'b' && lowercaseStr[i + 3] !== 'a'
				&& lowercaseStr[i + 4] === 'a') {
				return true;
			}
		}
	}

	return false;



}

//-----------------------------------



// the JavaScript language, have the function 
//secondGreatLow(arr) take the array of numbers 
//stored in arr and return the second lowest 
//and second greatest numbers, respectively, separated 
//by a space. For example: if arr contains [7, 7, 12, 98,
//
// 106] the output should be 12 98. The array will 
//not be empty and will contain at least 2 numbers.

function secondGreatLow(arr) {
	if (arr.length > 2) {

		var noDups = [];
		var arrOfTwo = [];
		arr.sort(function (a, b) {
			return a - b;
		})

		for (var i = 0; i < arr.length; i++) {
			if (noDups.indexOf(arr[i]) === -1) noDups.push(arr[i]);
		}

		arrOfTwo.push(noDups[1]);
		arrOfTwo.push(noDups[noDups.length - 2]);

		return arrOfTwo;
	} else {
		return arr;
	}

}

//

//binary

function toBinary(a, b) {
	return (a + b).toString(2);
}


//rotate arrayjs

//ticket checker

function nbrValidTickets(tickets) {
	var valid = 0;
	for (var i = 0; i < tickets.length; i++) {
		if (tickets[i].length === 6
			&& /[a-zA-Z]/.test(tickets[i][0])
			&& /\d/.test(tickets[i][1])
			&& /[a-zA-Z]/.test(tickets[i][2])
			&& /[a-zA-Z]/.test(tickets[i][3])
			&& /[a-zA-Z]/.test(tickets[i][4])
			&& /[a-zA-Z]/.test(tickets[i][5])
			) {
			valid += 1;

		}
	}
	return valid;
}



// The Coins of Ter

// Ter is a small country, located between
// Brelnam and the Orange juice ocean. It uses many different
// coins and bills for payment. However, one day, the 
//leaders of Ter decide that there are too many small coins. 
//Therefore, they ban the small coins. But no one knows
// which coins they'll ban, so they ask you to provide a 
//tool that can recalculate a price. After all, if one does 
//not have a 1 Terrek bill and can only give a 2 Terrek bill, 
//one needs to adjust the oddly priced items.
function adjust(coin, price) {
	return 0; // fix me
}


// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.


function arraySum(arr) {
	var summ = 0;
	for (var i = 0; i < arr.length; i++) {
		if (!arr[i].length) {
			summ += arr[i];
		} else {
			arr[i].forEach(function (e) {
				for (var j = 0; j < e.length; j++) {
					summ += e[j];
				}
			})
		}
	}
	return summ;
}
//this test worked for two out of three on codewars
 
//replacing 2 with 't'
function tea42(input) {

	return input.toString().replace(/[2]/g, "t");
};


// In this kata, you must create a 
//function powers that takes an array, and returns the 
//number of subsets possible to create from that list.
// In other words, counts the power sets.

function powers(list) {
	// Program me!
}



//----------------------------------------


function myParseInt(str) {
	if (/[a-zA-Z]/.test(str)) {
		return "NaN";
	} else if (/[.]/.test(str)) {
		return parseFloat(str).toFixed(1);
	}

	else {
		return parseInt(str);
	}
}
//--------------------------------------

function chain(x, functions) {
	functions = functions || [];
	functions.forEach(function (fn) {
		x = fn(x);
	});
	return x;
}


//------------------
//distance between two points

function lengthOfLine(array) {

	var a = x1 - x2//find out what the array will look like
	var b = y1 - y2

	var c = Math.sqrt(a * a + b * b);

	// c is the distance
	
	return c; //length of the line rounded to 2 decimal places as a string
}

//-------------------------------

function mine(dude) {

	if (dude.indexOf("m")) {
		return dude.replace(/m/g, "");
	} else return false;

}


//----------------------------------------------------

function yours(dude) {

	if (dude.indexOf("y")) {
		return dude.replace(/y/g, "");
	} else return false;

}

//----------------------------

var replace = function (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			arr[i] = 'O';
		}
	}
	return arr;
}

var myArray = [1, 2, 3, 4, 5, 6];
replace(myArray);

//-----------------------------------

//is it a perfect square??

var isSquare = function (n) {
	if (n < 0) return false;
	var dude = Math.sqrt(n);
	if (Number.isInteger(dude)) return true;
	else return false;
}

//----------------------

var isSquare = function (n) {
	return Math.sqrt(n) % 1 === 0;
}
//=------------------

function sum(array) {
	return array.reduce((prev, curr) => prev + curr);
}

//------------------------------------

//valid pin

function validatePIN(pin) {
	if (!(pin.length === 4 || pin.length === 6)) return false;
	var x = pin.replace(/[^0-9]/g, "");
	return x.length === pin.length;
}

//---------------------

//pairs

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
	return dna.split('').map(function (v) { return pairs[v] }).join('');
}


//-------------------------

//swapping case

function swapCase(str) {
	var splitStr = str.split('');
	var newArr = [];
	splitStr.forEach(function (e) {
		if (/[A-Z]/.test(e)) {
			newArr.push(e.toLowerCase());
		} else if (/[a-z]/.test(e)) {
			newArr.push(e.toUpperCase());
		}
	})
	var newStr = newArr.join('');
	return newStr;
}

//---------------------

function division(num1, num2) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		alert("try harder pal");
		return;
	}
	for (var i = num1 <= num2 ? num1 : num2; i > 0; i--) {
		if (num1 % i === 0 && num2 % i === 0) {
			return i;
		}
	}
}

//-------------------------------

function heyGuy(dude) {
	if (dude === "hey guy") {
		var newDude = dude.split('').forEach(function (e) {
			e = 'i';
		})
	}
	return newDude;
}

//playing with map

var a = [1, 2, 3, 4, 5, 6];
a.map(function (e) {
	e += 10;
});

//--------------------------------
function divisionStringified(num1, num2) {
	var result = num1 / num2;

	result = Math.floor(result);
	var str = result + '';

	var resultArray = str.split('');
	if (resultArray.length > 3) {
		resultArray.splice(1, 0, ",");
	}
	resultArray = resultArray.join('');
	result = resultArray;
	return result;

}

//-------------------------

//translate to the tribe numbers

function countArara(n) {
    var adak = n / 2;
    var arara;
    for (var i = 0; i < adak; i++) {
		arara.concat("adak ");
    }
    if (n % 2 === 1) {
		arara.concat("anane");
		return arara;
	}
}