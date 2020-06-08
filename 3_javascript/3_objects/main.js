console.log('JavaScript Objects')

// JavaScript Primitive DataTypes:
// string
// number
// boolean
// null
// undefined

// Creating a JavaScript Object
//     With JavaScript, you can define and create your own objects.
//     There are different ways to create new objects:
//     1. Define and create a single object, using an object literal.
//     2. Define and create a single object, with the keyword new.
//     3. Define an object constructor, and then create objects of the constructed type.

// using object literals
// object literals are similar to dictionaries in python
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// console.log(person.firstName)


// Using the JavaScript Keyword new
// var person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
// var x = person;   // This will not create a copy of person.

// var person = {firstname:"John", lastname:"Doe", age:50, eyeColor:"blue"}
// var x = person;
// x.age = 10;  // This will change both x.age and person.age

// person.address = 100
// console.log(person)

// JavaScript Object Properties

// Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// Properties can usually be changed, added, and deleted

// Accessing JavaScript Properties:
// 1. objectName.property 
// 2. objectName["property"] 

// console.log(person.firstname + " is " + person.age + " years old.")
// console.log(person["firstname"] + " is " + person["age"] + " years old.")

// Looping through properties
// var person = {fname:"John", lname:"Doe", age:25};

// for (prop in person) {
//   console.log(person[prop])
// }

// Adding New Properties
// person.nationality = "English"
// console.log(person)

// Deleting Properties
// delete person.age
// console.log(person)

// delete person
// console.log(person)

// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
// The delete operator is designed to be used on object properties. It has no effect on variables or functions.




// JavaScript Object Methods

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    // fullName : function() {
    //   return this.firstName + " " + this.lastName;
    // }
  }

// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
// Link: w3schools.com/js/js_this.asp

// Accessing Object Methods:
// objectName.methodName()
// You will typically describe fullName() as a method of the person object, 
// and fullName as a property.
// name = person.fullName()
// console.log(name)

// Using Built-In Methods
var message = "Hello world!"
var x = message.toUpperCase()
console.log(x)

// Adding a Method to an Object

person.fullName = function () {
    return this.firstName + " " + this.lastName;
  }






// JavaScipt Classes

// class Car {
//   constructor(brand) {
//     this.carname = brand
//     console.log(`object ${brand} created.`)
//   }
// }

// The keyword class is used to create a class, and in javascript the constructor() method is
// used as an init method. The constructor method is called each time the class object is initialized.

// mycar1 = new Car("Ford")
// mycar2 = new Car("Honda")

// Methods in classes

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   drive() {
//     console.log(`${this.carname} driving`)
//   }
// }

// mycar1 = new Car("Ford")
// mycar2 = new Car("Honda")

// mycar1.drive()
// mycar2.drive()


// Static Methods
  // Static methods are defined on the class itself, and not on the prototype.
  // That means you cannot call a static method on the object (mycar), but on the class (Car).

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   static beep() {
//     console.log("Beep Beep!!")
//   }
// }
  
// mycar = new Car("Ford");
// // mycar.beep()
// Car.beep()



// Inheritance
  // To create a class inheritance, use the extends keyword.
  // A class created with a class inheritance inherits all the methods from another class

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     console.log(`Presenting ${this.carname}`)
//     return `Presenting ${this.carname}`
//   }
// }
  
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     console.log(`${this.present()}, and it is a  ${this.model}`)
//   }
// }

// mycar = new Model("Ford", "Mustang")
// mycar.show()


// MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes