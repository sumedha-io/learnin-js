const arr = [1,2,3,4,5]
const greetings = "Hello World!"
//for of
for (const element of arr) {
    console.log(element);
}
for (const character of greetings) {
    console.log(character);
    
}

//Maps {key=>value} ONLY unique values are stored

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('ESP',"Spain")
map.set('IN',"India")
console.log(map);

for (const element of map) {
    console.log(element);
}
/* [key, value]
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'ESP', 'Spain' ]
*/
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
const myObject = {
    js: 'JavaScript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } this gives error that myObject is not iterable

//for in : helpful in objects and many other things

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}
for (const index in arr) {
    console.log(`${arr[index]} is at ${index} index`);
}
for (const key in map) {
    console.log(`${key} is short for ${map[key]}`);//GIVES NOTHING using FOR IN
}

//foreach function is associated with array 
arr.forEach(function (element){ //element is passed to the non named function (callback), element has the value at each index because foreach goes to every element and performs the function
    console.log(element);
})

function printName(item){
    console.log(item);
}
arr.forEach(printName)//no need of passing args because the function works on every element
//foreach has three parameters item, index and arrayname
arr.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        language: "javascript",
        filename: "js",
    },
    {
        language: "C++",
        filename: "cpp",
    },
    {
        language: "python",
        filename: "py",
    },
]
//array with object as elements
//foreach can be applied on arrays
myCoding.forEach( (item) => {
    for (const key in item) {
        console.log(`${key} is key for ${item[key]}`);
    }
} )
//item refers to an object

//Disadvantage of foreach it doesnt allow the function inside foreach to return anything (undefined output)
// arr.forEach((item)=>{
//     return item// no output
// })
//Hence map, filter and reduce

console.log(arr.filter( (num) => (num>2) ));
console.log(arr.filter( (num) => {return num>2} ));
//console.log(arr.filter( (num) => {num>2} ));//[] because within {} there has to be return
console.log(arr.filter( (num) => num>2 ));
//equivalent foreach
// const newar = []
// arr.forEach( (num) => {
//     if(num>2){
//         newar.push(num)
//     }
// } )
// console.log(newar);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userBooks = books.filter( (bk) => bk.genre === 'History' )
console.log(userBooks);
console.log(books.filter( (bk) => (bk.publish >= 1995 && bk.genre === 'History') ));
console.log(arr.filter(((num)=>num>2)).map( (num) => {return num*10} ).map((num)=>num+1));

//reduce

console.log(arr.reduce(function(accumulator, currval){
 console.log(`acc: ${accumulator} , currval: ${currval}`);
return accumulator+currval},2));//usually initial value of acc =0
//.reduce function will be passed to parameters one a callback function and the other is the initial value the accumulator must posses
console.log(arr.reduce((acc,currval)=>(acc+currval),0));
