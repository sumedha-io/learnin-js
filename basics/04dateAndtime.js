//Date object
let myDate = new Date()
//console.log(myDate);2026-07-20T16:10:44.640Z chaotic
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0,23)//Jan=0
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0,23,5,5)//5:5 AM
// console.log(myCreatedDate.toLocaleString())
let myCreatedDate = new Date("01-14-2023")//MM/DD/YY
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
/*console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
myTimeStamp= now and myCreatedDate.getTime() gives then and the difference can be found
*/

console.log(Math.floor(Date.now()/1000));//dividin by 1000 gives seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//Month-1[0 based]
console.log(newDate.getDay());//Monday=1

newDate.toLocaleString('default',{
    weekday: "long"//ctrl+space for suggestions
})
console.log(newDate.toLocaleString('default',{
    weekday: "long"//ctrl+space for suggestions
}));
