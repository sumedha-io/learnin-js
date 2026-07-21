//singleton is created through constructor 
//Object.create

//object literals

const mySym = Symbol("key1")
const jsUser = {
    [mySym] : "mykey",
    name: "S",
    age: 20,
    location:"B'lore",
    email:"s@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Mon","Tue"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);//because email is a string. Note: If there's a key with spaced string ["full name"] has to be used indefinetely
//If one of the keys used is a symbol use [] notation while declaring and accessing
console.log(jsUser[mySym]);
//Object.freeze(jsUser)
jsUser.email="sum@gmail.com"
console.log(jsUser);//observe symbol notation Symbol(key1): 'mykey' and the email is not changed because the object is frozen

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//there could be many objects to refer to the same object under which declaration is taking place this is used
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser);

//standalone objects don't change their parameters throughout
//const instaUser = new Object() this cretes an empty object used to create standalone objects
const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "Sammy"
instaUser.isLoggedin = false
console.log(instaUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sumedha",
            lastname:"kulkarni"
        }
    }
}
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//console.log({obj1,obj2}); gives { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(Object.assign({},obj1,obj2));//{}= target and objs = source
console.log({...obj1,...obj2});//spread operator

//details of users from database is received as an array with each user as an object
const users = [
    {id:1,email:"a@gmail.com"},
    {id:2,email:"b@gmail.com"},
    {id:3,email:"c@gmail.com"},
    {id:4,email:"d@gmail.com"},
]
console.log(users[1].email);//at each index an object is present 

console.log(Object.keys(instaUser));//an array of the keys is returned helps in database management
console.log(Object.values(instaUser));//an array of the values is returned helps in database management
console.log(Object.entries(instaUser));//an array of the [key,values] is returned 
console.log(instaUser.hasOwnProperty("isLoggedIn"));

/*Destructuring is done by enclosing the parameters in {} equating it to the object so that usage of object.parameter multiple times is avoided
Widely used in react
*/

const course = {
    coursename : "JavaScript",
    price:"999",
    instructor:"andrew"
}
const {instructor} = course
console.log(instructor);
