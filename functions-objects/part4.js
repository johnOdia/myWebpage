// part 4(A)
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

// part 4(B)
function sayHello(name){
    if (name === 'John'){
        console.log('Hello Boss')
    }
    else{
        console.log(`Hello ${name}`)
    }
}

// part 4(C)
function average(arr){
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum / arr.length;
}

//part 4(D)
function createStudent(str1,str2){
    return {
        firstName: str1,
        secondName: str2
    }
}

//part 4(E)
let john = createStudent('john','doe')
let jane = createStudent('jane','doe')
let andrew = createStudent('andrew','west')
let students = [john,jane,andrew]

//part 4(F)
function findStudentByFirstName(str){
    let smallCaps = str.toLowerCase()
    for (let i = 0; i < students.length; i++){
        if(smallCaps === students[i].firstName){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
  }

  //part 4(G)
  function extractEveryThird(arr){
    let count = 0;
    let newArray = [];
    for (let i = 0; i <= arr.length; i++){
     
      if (count === 3){
        newArray.push(i)
        count = 0;
      }
      count++;
      console.log(count)
    }
    console.log(newArray)
  }
  extractEveryThird([1,2,3,4,5,6])

  //part 4(H)
  function  countEvensAndOdds (array){
    let evenNumbers = 0;
    let oddNumbers = 0;
      for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
          evenNumbers++;
        }
        else{
          oddNumbers++;
        }
      }
      console.log({
        evenCount: evenNumbers,
        oddCount: oddNumbers
      })
  }
  countEvensAndOdds([1,2,3,4])

  //part 4(I)
  var myVar = "Hello from global";
function scopePractice() {
   var myVar = "Hello from function scope";
}
scopePractice();
console.log(myVar);
var tricky = "Hello from global";
function trickyScopePractice() {
    tricky = "Hello from function scope";
}
console.log(tricky);

//this function will console.log 'hello from global' twice because two variables containing this text were defined and console logged in the global scope. The text in the myVar variable was not chabged by the scopePractice variable because it was passed by reference not by value and is thus limited to the function block, same with the tricky variable.