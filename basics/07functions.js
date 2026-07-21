function loginUserMessage(username){
    if(!username){//username===undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//loginUserMessage("po") nothing is displayed because console.log should be used or it should be assigned to a variable
/*
If no argument is passed an username=undefined
*/
console.log(loginUserMessage("Po"));
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,500,800));
//...num1 rest operator helps in combining all the arguments int an array num1

//SCOPE
/*
A mother function can call functions inside it and cannot access or ask for variables inside its children functions.
Cause the scope of a variable in a child function remains within that function.
Whereas a variable in the mother function can be accessed or asked by the children functions

If a child function is not called under the mother function then the operations and statements inside that child function wont be executed
*/

function one(){
    const username = "sume"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); leads to an error 
    two()//if this is not called statements under two wont be executed
}
one()

if(true){
    const username = "sum"
    if(username==="sum"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website); gives an error (Analogy:mother asking its child for icecream is weird)
}
//console.log(username); username is confined to if block

//IMPORTANT mini hoisting

addone(5)
function addone(num){
    return num+1
}

//addTwo(5) this leads to an error because the variable addTwo was not found before the call
const addTwo = function(num){
    return num+2
}

//this
const user = {
    username:"sume",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)//this in node environment is empty object in this global context but in browser its Window

function essenceOfThis(){
    let username = "sume"
    console.log(this.username);//{} because it works only under objects not function this refers to objects
    console.log(this);//gives vast details
}
essenceOfThis()

//arrow function

// const addingTwo = (num1,num2) => {
//     console.log(this);//{} but function() gives a vast details
    
// }
// addingTwo()

/*
For single line operations 
 If { } are used after the arrow then return is mandatory otherwise no return needed under ()
*/

//const addingTwo = (num1, num2) => (num1+num2)//no need of return within ()

const addingTwo = (num1, num2) => ({username: "sume"})//  return of an OBJECT within ()

console.log(addingTwo(5,6));
