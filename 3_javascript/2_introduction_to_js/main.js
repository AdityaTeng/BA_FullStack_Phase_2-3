// alert("this is a new alert!")

// document.write('<br>This is from dcument.write function')

console.log("hello world!")
//mdn documnetation for console documentation
console.error("this is an error!")
console.warn("this is a warning!")

//MDN console

// variables
// var, let and const
// var is “function scoped”.
// “let” and “const” are “block scoped”.
// with let you can reassign values.
// const, cannot be reassigned, however it is mutable

// Link : https://codeburst.io/difference-between-var-let-and-const-in-javascript-fbce2fba7b4

let age_1 = 24           
console.log(age_1)
age_1 = "hello"
console.log(age_1)          // const will give an error

// declaring the varible multiple times will throw an error

// let age_0 = 45
// let age_0 = 90
// SyntaxError: Identifier 'age_0' has already been declared


// primitive datatypes
// String, Numbers, Boolean, null, undefined, Symbol[added in ES6]

const name_1 = 'John'
const age_2 = 40
const rating = 4.25
const is_cool = true
const x = null
const y = undefined; let z;
console.log(typeof(age_2))
// search: why typeof null is object in js

//strings
const name = "John"
const age = 30

//concatenation
console.log('My name is ' + name)
// use backtick
console.log(`My name is ${name} and my age is ${age}`) 

//methods
const s = 'Hello World'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0, 6).toUpperCase())
s_list = s.split(' ')
console.log(s_list)

const s1 = 'technology, computers, it, code'
console.log(s1.split(', '))

// MDN js string attributes and methods


/*multiline 
comment*/

// Arrays - variables that hold multiple values
// 1st way 

let numbers = new Array(1,2,3,4,5)
console.log(numbers)
//2nd way
let fruits = ['apple', 'banana', 'cherry']
console.log(fruits)
//indexing
console.log(fruits[0])

// adding items
fruits[3] = 'grapes' 
console.log(fruits)

//adding to the end
fruits.push('mangoes')
// adding to start
fruits.unshift('strawberries')
console.log(fruits)

//removing items

// Removes from the End of an Array
fruits.pop()
console.log(fruits)

// Removes from the beginning of an Array
fruits.shift()
console.log(fruits)

// removes from a specific Array index
fruits.splice(index=2, howmany=1)
// Link: https://www.w3schools.com/jsref/jsref_splice.asp
console.log(fruits)

// indexOf
console.log(fruits)
console.log(fruits.indexOf('banana'))


/* While JavaScript doesn’t natively include a type called “Dictionary”,
 it does contain a very flexible type called “Object”.
The JavaScript “Object” type is very versatile since JavaScript is a 
dynamically typed language. 
This flexibility allows for the “Object” type to be used in ways that might
seem strange when compared to statically typed languages such as C#.

python dictionaries vs js objects:
https://stackoverflow.com/questions/20987485/what-are-the-differences-between-python-dictionaries-vs-javascript-objects*/



// object literals, key-value pairs
const person = {
    'f_name' : 'john',
    'l_name' : 'doe',
    'age' : 30,
    'hobbies' : ['music', 'movies', 'sports'],
    'address' : {
        'home' : 'home addresss',
        'work' : 'work address'
    }
}
console.log(person['age'])
console.log(person['address']['work'])
console.log(person.f_name)

// destructuring
// if we want the properties from this object as variables
let {f_name, l_name} = person
console.log(f_name, l_name)
console.log(person)
// its like pulling out these from person object

// adding properties to an object
person.email = "john_does@gmail.com"
console.log(person)

//arrays of objects
const todos = [
    {
        id : 1,
        text : 'Take out trash',
        is_completed : true
    },
    {
        id : 2,
        text : 'Meeting with Boss',
        is_completed : true
    },
    {
        id : 3,
        text : 'Dentist Appointment',
        is_completed : false
    }
]
console.log(todos)
// selecting items from an object
console.log(todos[0].text)




// json data: sending and recieving data from api
// convert js object literals to json format
const todo_json = JSON.stringify(todos)
console.log(typeof(todo_json))


json_str = '{ "name":"John", "age":30, "city":"New York"}'
let obj = JSON.parse(json_str)
console.log(typeof(obj))



//For loop
// syntax: for(set iterator; condition; increment)
// for(let i=0; i<=10; i++){
//     console.log(`for loop no. ${i}`)
// }

//While loop
// let i=0
// while (i<=10){
//     console.log(`while loop no. ${i}`)
//     i++
// }

//looping through arrays
//method 1:
// console.log(`todos length is ${todos.length}`)

// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].text, todos[i].is_completed)
// }

//method 2:
// for(let todo of todos){
//     console.log(todo.text)
// }


//Functional Programming and Higher order functions
// Link: https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

// high order array methods
// forEach, map, filter

// forEach
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// map: returns an array
// const todo_text = todos.map(function(todo){
//     return todo.id
// })
// console.log(todo_text)

//filter: 
// const todo_completed = todos.filter(function(todo){
//     return todo.is_completed === true
// }).map(function(todo){
//     return todo.text
// })
// console.log(todo_completed)

// look into detail: high order array methods- Traversy Media



//conditionals
// with && (and) || (or) !(not)

const x1=20
const y1=30

if(x1===10 || y1===30){
    console.log('if true')
}
else if(x1===20 && y1==30){
    console.log('else if true')
}
else{
    console.log('else true')
}

// == vs ===
// == will not check for datatype
// in most cases you want to use ===
const x2=10
if(x2=='10'){
    console.log('x2 is 10')
}

// Ternary operator [?] means then
/*The conditional (ternary) operator is the only JavaScript operator that
takes three operands: a condition followed by a question mark (?), then
an expression to execute if the condition is truthy followed by a colon(:),
and finally the expression to execute if the condition is falsy.
This operator is frequently used as a shortcut for the if statement.*/

const x3=10
//lets say we want to create a variable called color
let color = x3>9 ? 'red' : 'blue'
console.log(color)



// color = 'green' 



//swtich
/*The switch statement is used to perform different actions based on
different conditions.

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.

Switch cases use strict comparison (===).
The values must be of the same type to match.

The default keyword specifies the code to run if there is no case match
*/
// switch(color){
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default :
//         console.log('color is not red or blue')
//         break  
// }



// Functions

function add_nums(num1=0, num2=0){
    console.log(num1+num2)
    return num1+num2
}

add_nums(num_1=10, num_1=20)


// Arrow Functions:

// for returning
// const add_nums_1 = (num3= 0, num4=0) => num3+num4
// for viewing in console
// const add_nums_2 = (num5= 0, num6=0) => console.log(num5+num6)

// add_nums_1(50,100)
// add_nums_2(100,200)








// Javascript Scope
    // Scope determines the accessibility (visibility) of variables.
    // In JavaScript there are two types of scope:
    //     Local scope
    //     Global scope
   
// Example 1:

// // code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
  }

// // code here can NOT use carName
 



// Example 2: Global Scope

var carName = "Volvo";
// code here can use carName

function myFunction() {
    // code here can also use carName  
  }


// Link: https://developer.mozilla.org/en-US/docs/Glossary/Scope






// Javascript Closure


// let x = [1,2,3,4]


// function add(x, y){
//     const a = 40
//     function product(p){
//         return a*p
//     }
// }

// function add(x, y){
//     console.log(x+y)
// }

// function product(p){
//     const a = 40
//     console.log(p*a)
//     return p*a   
// }

// add(product(10), 100)
// add(400,100)

// What is a lexical environment?
    // A lexical environment is a data structure that holds identifier-variable mapping.
    //     (here identifier refers to the name of variables/functions, and the variable is
    //     the reference to actual object [including function type object] or primitive value).

// What is lexical scope in javascript?
    // A lexical scope in JavaScript means that a variable defined outside a function can be
    // accessible inside another function defined after the variable declaration. 
    // But the opposite is not true, i.e. the variables defined inside a function will not be
    // accessible outside that function.


// What is a closure in JavaScript?
    // A closure is the combination of a function bundled together (enclosed) with references to its
    // surrounding state (the lexical environment). In other words, a closure gives you access to
    // an outer function’s scope from an inner function. In JavaScript, closures are created every
    // time a function is created, at function creation time.
        // Functions in JavaScript form closures. 
        // A closure is the combination of a function and the lexical environment within which that
        // function was declared. 

// MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// W3schools Link: https://www.w3schools.com/js/js_function_closures.asp
// Medium Link: https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4


















// Object Oriented Programming

/*There are certain features or mechanisms which make
 a Language Object Oriented like:

Object
Classes
Encapsulation
Inheritance

Object
    An Object is a unique entity which contains property and methods.
    For example “car” is a real life Object, which have some characteristics
    like color, type, model, horsepower and performs certain action
    like drive. The characteristics of an Object are called as Property,
    in Object Oriented Programming and the actions are called methods. 
    An Object is an instance of a class. Objects are everywhere in 
    JavaScript almost every element is an Object whether it is a function,
    arrays and string.
    Note: A Method in javascript is a property of an object whose value is a function.

Object can be created in the following ways in JavaScript:*/

//Using an Object Literal

// let person1 = { 
//     first_name:'John', 
//     last_name: 'Doe', 
  
    //method 
    // getFunction : function(){ 
    //     return (`The name of the person is ${person1.first_name} ${person1.last_name}`) 
    // }, 
    //object within object 
//     phone_number : { 
//         mobile:'12345', 
//         landline:'6789'
//     } 
// } 
// console.log(person1.getFunction());  
// console.log(person1.phone_number.landline); 


// Using an Object Constructor:

// function person2(first_name,last_name){ 
//     this.first_name = first_name; 
//     this.last_name = last_name; 
//  } 
 //creating new instances of person object 
//  let person3 = new person2('Tom','Hardy'); 
//  let person4 = new person2('Ben','Affleck'); 
   
//  console.log(person3.first_name); 
//  console.log(`${person4.first_name} ${person4.last_name}`);


// Using Object.create() method:
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.





















