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

var acceptEmail = function(str){
  
}

//-------------------------------------------------------------

// Using the JavaScript language, have the
// function letterChanges(str) take the 
//str parameter being passed and modify it
// using the following algorithm: Capitalize
// every vowel in this new string 
//(a, e, i, o, u) and return this modified string.

function letterChanges(str){
  
  if (typeof str !== 'string' || str.length === 0){
    alert('you gotta do better than that pal');
      return;
    }
  
  
  
  var splitStr = str.split('');
  var newArr = [];
  splitStr.forEach(function(e, i, arr){
    if(/[aeiou]/.test(e)){
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



