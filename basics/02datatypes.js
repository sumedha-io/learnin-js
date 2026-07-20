"use strict"; //treat all JS code as newer version
//alert(3 + 3) nodejs is being used not the browser
console.log(3+3)

/*datatypes
1.number = 2^53
2.bigint
3.string=""
4.boolean=true or false
5.null=standalone value
6.undefined
7.symbol=unique
8.object
*/
let age=9
console.log(typeof age);
console.log(typeof(age));
console.log(typeof "sum");
console.log(typeof null);//object
console.log(typeof undefined);

//Symbols=unique
const id = Symbol('123')
const id1 = Symbol('123')

console.log(id===id1);
console.log(id==id1);

// bigint suffix the number n
const p= 7845368647569879834n
console.log(typeof p);
 
//Reference or non primitive

const ar = [3,4,5,6,7]
let obj = {
    name:"su",
    age:45,
}
const fun = function(){
    console.log("Hey");
    
}
console.table(typeof ar)
console.table(typeof obj)
console.table(typeof fun)

//Stack memory= primitive datatypes => if equated refernce is not sent a copy of value occurs
//Heap memory=non primitive => if equated refernce is sent on changing the value of a single variable changes values in both the equated parameters
let i=7;
let j=i;
j=0;
console.log(i);
console.log(j);
let o ={
    email:"sume@gmail.com",
    password:567586,
}
let ob=o;//reference of o is passed to ob
ob.email="user@gmail.com"
console.log(o.email);
console.log(ob.email);

//SRINGS
const name= "su"
const repocount = 20
console.log("Hey"+name+repocount);//chaotic

//string interpolation is done using backticks
console.log(`Hello I am ${name} and my repo count is ${repocount}`);

//Another way of getting string as string object
const gameName = new String('Sume-digo-com')
console.log(gameName.__proto__);//gives all the functions under string in the browser but {} in node
/* way to get the prototype that is created when string object is cretaed in the browser
    all the functions(like length,toUppercase) that can be applied to strings are present in the prototype in the browser
    ON NODEJS these functions are accessed directly
*/
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName);//the original value wont be changed because string is IMMUTABLE primitive 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('g'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-8,4));
//diff bw slice and substring is that substring wont obey -ve values
const newString = "     server       "
console.log(newString.trim());
console.log(newString.trimEnd());

//in urls spaces are converted into %20
const url = "https://sumedigo.com/sumeda%20kulkarni"
console.log(url.replace('%20', '-'));//%20 is replaced by -
console.log(url.includes('sumeda'));
console.log(gameName.split('-'))

//Number object
const balance = new Number(100)
console.log(balance);
console.log(balance.toFixed(2));//set number of decimal places
console.log(balance.toString().length);//converts the number to string so that length of the string can be found

const otherNum = 1123.8966
//const otherNum = 123.8966 124
//const otherNum = 23.8966 23.9
console.log(otherNum.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); acc to international system
console.log(hundreds.toLocaleString('en-IN'))


//Math.random value lies bw 0 and 1
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min));//worst case if max-min=0 +1 is done to avoid 0
//lies bw min and max
