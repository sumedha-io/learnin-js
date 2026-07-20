//let score = "33abc" NaN typeof NaN is number
//let score = null 0
//let score = undefined NaN
//let score = true 1
let score = "33"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber)

//let isLoggedIn = "s" true
//let isLoggedIn = "" false
let isLoggedIn = 0
//let isLoggedIn = 90 true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn)

let someNumber = 44 //everything is converted to string with the same value in stringNumber
let stringNumber = String(someNumber)
console.log(typeof someNumber);
console.log(typeof(stringNumber));
console.log(stringNumber)


// Operations = %,**,*.-,+
console.log("SUMEDHA "+"KULKARNI")
console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")
console.log("1"+2+2)

console.log(+true);//1
console.log(+"");//0

//Comaprison === strictly checks datatype
console.log("2"==2);
console.log("2"===2);
