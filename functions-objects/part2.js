var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//number1
programming.languages.push('Go')

//number2
programming.difficulty = 7

//number 3
delete programming.jokes

//number 4
programming.isFun = true;

//number 5
for (items in programming.languages){
    console.log(programming.languages[items])
  }

//number 6
for (items in programming){
    console.log(Object.keys(programming))
}

//number 7
for(items in programming){
    console.log(programming[items])
}