//number 1
let myDetails = {
    firstName: 'John',
    lastName: 'Odia',
    occupation: 'software engineer'
}
//number 2
myDetails[firstName]
myDetails.firstName
myDetails[lastName]
myDetails.lastName
myDetails[occupation]
myDetails.occupation

//number 3
myDetails.hobby = 'coding'
delete myDetails.occupation

//number 4
/*When working with dot notation, property identifies can only be alphanumeric (and _ and $ ). Properties can't start with a number. Bracket notation on the other hand can access these kind of properties. */

//number 5
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
  }
  
  for (let keys in namesAndHobbies) {
    let value = namesAndHobbies[keys];
    console.log(keys + ' => ' + value)
  }

  //number 6
namesAndHobbies['john'] = 'playing the guitar'
console.log(namesAndHobbies)

//number 7
if('john' in namesAndHobbies) {
    console.log('john : ' + namesAndHobbies.john)
}