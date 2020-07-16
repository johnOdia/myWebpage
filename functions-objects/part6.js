// part 6(A)
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // ?

// This code returns 'Tim' because the variable firstName has been re-assigned within the function block scope. However the value of the variable remains thesame within the global scope

//part 6(B)
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
  }
  
  displayFirstName();
  
  console.log(firstName) // ?
  //the above code returns  Tim because the variable firstName has been declared within block scope and the function was called which returns that variable

  //part 6(C)
  console.log(firstName) // ?
var firstName = "Elie"
//this code outputs undefined because of the concept of hoisting

//part 6(D)
console.log(firstName) // ?
firstName = 'Elie'
//this code returns a reference error because firstName was logged before being initialized. Hoisting did not take effect because the variable was defined without using the var keyword

//part 6(E)
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
  }
  sayHi(); // ?
  //this code returns hi undefined because the sayHi function ignores all statements below it's return statement including the variable firstName

  //part 6(F)
  function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
  }
  sayHi(); // ?
  //this code returns a reference error because the firstname variable is not defined with a var keyword, hence can't be hoisted

  //part 6(G)
  sayHi() // ?

function sayHi(){
    return 'Hi!';
}
//this code returns Hi! because hoisting allows us to call a function declaration before defining it

//part 6(H)
console.log(sayHi()) // ?

var sayHi = function(){
    return 'Hi!';
}
//this code returns a typeError because hoisting doesn't allow us to call a function expression before defining it
