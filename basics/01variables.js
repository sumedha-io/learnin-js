const accId = 14567367
let accEmail = "su@gmail.com"
var accPassword = "123848"
accCity = "B'lore"
let accState
 
//accId =6 not allowed
/*
Prefer not to use var because
of issue in block scope and functional scope 
*/

console.table([accId,accEmail,accPassword,accCity,accState])
let i=1;
if(true){
 const a = 2;
 let b= 3;
 var c = 9;
 let i=2
 accPassword = "848"
}
//console.log(b) results in an error because of the block scope
//console.log(a) results in an error because of the block scope
console.log(c) //does not result in an error hence avoid var also  accPassword changes to "848" which should be "123848"
console.log(i)//gives 1 not 2 because i will have 2 only in if block
