const arr = new Array(1,2,3,4,5)//arr= [1,2,3,4,5]
console.log(arr);
arr.push(6)
arr.push(7)
arr.pop()
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
arr.unshift(9)//appends 9 in the front
console.log(arr)//[ 9, 1, 2, 3, 4, 5, 6]
arr.shift()
arr.shift()//removes elements in the front 
console.log(arr)//[ 2, 3, 4, 5, 6 ]
console.log(arr.includes(9));
console.log(arr.indexOf(9));//-1 if not present
console.log(arr.join(" "));
console.log(arr.join());
console.log(typeof arr.join());

//Diference between slice and splice{[start,end]}
//splice manipulates the original array by removing the section from the original array that was given as arguments
//slice returns the section only without manipulating the original array[start,end)

console.log(arr.slice(1,3));
console.log("a ", arr);
console.log(arr.splice(1,3));
console.log("b ", arr);
/*
[ 3, 4 ]
a  [ 2, 3, 4, 5, 6 ]
[ 3, 4, 5 ]
b  [ 2, 6 ]
*/
arr.push(true)
console.log(arr);//array in js is HETEROGENEOUS

let a = ["a", "b", "c"]
let b = ["e", "f", "g"]
a.push(b)
console.log(a);//[ 'a', 'b', 'c', [ 'e', 'f', 'g' ] ]
a.pop()//removes prev change
let c = a.concat(b)//concat returns a new array without changing the og array unlike push
console.log(c);

//spread operator spreads all the values
let d = [...a, ...b]
console.log(d);

let i = [1,2,3,[4,5,6],7,[8,9,[0,1]]]
console.log(i.flat(2));//2 is the max no of subarrays (infinity is the best option)
//flat spreads out all the values in the subarray

console.log(Array.isArray("Sumedha"));//its as string
console.log(Array.from("Sumedha"));
console.log(Array.from({name:"Sume"}));//we need to mention if we want the array of keys or values hence [] is returned
console.log(Array.of(100,200,300));//individual variables with corresponding values can be passed

