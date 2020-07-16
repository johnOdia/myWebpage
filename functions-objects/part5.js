//number 1
var displayFullName = (function (firstName = 'john', lastName = 'doe') {
    console.log(firstName + ' ' + lastName)
})();

//number 2
const  createCalculator = {
    add : function(a,b){
      return a + b;
  },
  subtract : function(a,b){
    return a - b;
  },
  multiply : function(a,b){
    return a * b;
  },
  divide : function(a,b){
    return a / b;
  }
  }