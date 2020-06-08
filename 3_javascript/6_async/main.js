// Sync Javascript code
// function display(){
//     console.log('Running Display Function')
// }

// console.log('Start')
// display()
// console.log('End')

// // Async Javascript code

// console.log('Start')
// setTimeout(() => {
//     console.log('Running this in setTimout callback')
// }, 2000)
// console.log('End')


// setTimeout function is an async function
// So when we run this code in the browser, the function setTimeout
// is passed on to Web Apis to handle. And the browser will take 
// care of running that function.

// Similar operations like eventlisteners are also tracked by
//  the browser

// Other async operatons: fetch, setInterval



// Javascript Callbacks
    // Callbacks are a great way to handle something after something else
    // has been completed. By something here we mean a function execution.
    // If we want to execute a function right after the return of some other
    // function, then callbacks can be used.

// function add(a, b){ 
//     console.log(`The sum of ${a} and ${b} is ${a+b}.`) 
//     disp()
//     } 
 
// function disp(){ 
//     console.log('This must be printed after addition') 
//     } 

// add(5,6); 
// disp()

// Another way of writing the same callback function:
function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.`) 
    callback()
} 
// we can define the callback function in the add function call 
// add(5,6, function disp(){ 
//     console.log('This must be printed after addition.') 
// })

add(5,6, () => console.log('This must be printed after addition.'))





// using arrow function
// x = console.log('running this in callback')
// add(5,6, () => (x))






