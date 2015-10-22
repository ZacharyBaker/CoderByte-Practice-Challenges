//Using the JavaScript language, have the function 
//SimpleSymbols(str) take the str parameter being passed and determine if it is an
// acceptable sequence by either returning the string 
//true or false. The str parameter will be composed 
//of + and = symbols with several letters between them 
//(ie. ++d+===+c++==a) and for the string to be true 
//each letter must be surrounded by a + symbol.
// So the string to the left would be false. The string 
//will not be empty and will have at least one letter. 



// function SimpleSymbols(str) { 

//   // code goes here  
//   return str; 
         
// }
   
// // keep this function call here 
// // to see how to enter arguments in JavaScript scroll down
// SimpleSymbols(readline());                            



// //---------------------------------------------------

function paperRockScissors(){
  // play1: "paper",
  // play2: "rock",
  // 3: "scissors",
  this.play = function (){
    var userChoice = prompt("Rock, paper, or scissors?(lowercase please :)");
    var counter = Math.floor((Math.random()* 3)+1);
    if (userChoice === "paper" && counter === 1){
      alert("You picked paper and the computer picked paper!");
      alert("It's a tie!");
      return;
    } else if (userChoice === "paper" && counter === 2){
      alert("You picked paper and the computer picked rock!");
      alert("You win!");
      return;
    } else if (userChoice === "paper" && counter === 3){
      alert("You picked paper and the computer picked scissors!")
      alert("You lose!");
      return;
      } else if (userChoice === "rock" && counter === 1){
        alert("You picked rock and the computer picked paper!");
        alert("You lose!");
        return;
       } else if (userChoice === "rock" && counter === 2){
         alert('You picked rock and the computer picked rock!');
         alert("It's a tie!");
         return;
       } else if (userChoice === "rock" && counter === 3){
         alert("You picked rock and the computer picked scissors!");
         alert("You win!");
         return;
       } else if (userChoice === "scissors" && counter === 1){
         alert("You picked scissors and the computer picked paper!");
         alert("You win!");
         return;
       } else if (userChoice === "scissors" && counter === 2){
         alert("You picked scissors and the computer picked rock!");
         alert("You lose!"); 
         return;
        } else if (userChoice === "scissors" && counter === 3){
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
  this.play = function(userChoice){
    var counter = Math.floor((Math.random()* 3)+1);
    if (userChoice === "rock"){
      userChoice = 2;
    } else if (userChoice === "paper"){
      userChoice = 1;
    } else {
      userChoice = 3;
    };
    if (userChoice === counter){
      alert("It's a tie!");
      return;
    } else if (userChoice < counter){
      alert("You win!");
      return;
    } else if (userChoice > counter){
      alert("You lose!");
      return;
    }
  }
}
var game = new rockPaperScissors();
game.play("rock");



//Write a function that takes an array and replaces all of the odd numbers with the letter ‘O’.

var replace = function(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      arr[i] = 'O';
    }
  }
  return arr;
}

var myArray = [1,2,3,4,5,6];
replace(myArray);


//---------------------------------------
//playing with map

var a = [1,2,3,4,5,6];
a.map(function(e){
  e += 10;
});

//------------------------------------------
var a = [1,2,3,4,5,6];
a.filter(function(e){
  return e % 2 === 0;
});//runs a test. notice that i did not use an if statement and it still works swimmingly



//----------------------
var a = [1,2,3,4,5,6];
a.reduce(function(acc, e){
  return acc + e;
});