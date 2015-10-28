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
  for (var i = 1; i < strArray.length - 2; i++){
    if(/a-zA-Z/.test(strArray[i])){
      if(/\+/.test(strArray[i-1]) && /\+/.test(strArray[i+1])){
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
}