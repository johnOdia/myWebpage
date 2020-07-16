//number 1
function myName() {
    console.log('john')
}
let favoriteFoods = ['pizza', 'ice cream']

//number 2
function randomFoods() {
    let randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
        console.log(favoriteFoods[0])
    }
    else {
        console.log(favoriteFoods[1]);
    }
}

//number 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function displayOddNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            console.log(numbers[i])
        }
    }
}

//number 4
function displayEvenNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i])
        }
    }
}
//number 5
function  returnFirstOddNumber(){

}

//number 6
function returnFirstEvenNumber() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log[i];
        }
        break;
    }
}

//number 7
function returnFirstHalf() {
    let splitArray = numbers.length / 2
    let arrayFirstHalf = numbers.slice(0, splitArray);
    console.log(arrayFirstHalf)
}

//number 8
function returnSecondHalf() {
    let splitArray = numbers.length / 2
    let arraySecondHalf = numbers.slice(splitArray,numbers.length);
    console.log(arraySecondHalf)
}

