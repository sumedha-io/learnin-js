//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//This is done to reduce the pollution in the global scope 
//a function is assigned to a variable and that variable is again called which pollutes the global scope *if too many functions instead this is done
// Wrapping of function definition inside () and call () beside it

//named iife with name of the function being hey
(function hey(){console.log("Hello");
})();//**the semicolon is mandatory that indicates the end of the function call and moves to the next call otherwise error if next function is called

((name) => {
    console.log(`Hello ${name}`);
})("Su");