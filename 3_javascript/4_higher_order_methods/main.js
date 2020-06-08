// Higher Order Methods
//   forEach > a better way to loop through an array instead of a for loop.
//               doesnt return anything
//   filter > filter allows us to filter this out of an array using a condition.
//               returns an array 
//   map    > using map we can create new arrays using the elements inside the array.
//   sort
//   reduce

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Standard for loop
// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i].start)
// }

// // // forEach
// companies.forEach(function(company) {
//   console.log(company.name)
// })

// // Arrow function
// companies.forEach((company) => {
//   console.log(company.name)
// })


// filter
// Get 21 and older from ages array
// console.log('\nfilter ages 21 and above')

// Using a for loop
// let canDrink = []
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink)

// // Now using filter 
// canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true
//   }
// })
// console.log(canDrink)


// // Using Arrow function
// canDrink = ages.filter(age => age>=21)
// console.log(canDrink)


// console.log(companies)


// // For Practice
// Filter retail companies
// console.log("Filter Retail companies")

// // 1.
// let retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// })
// console.log(retailCompanies)

// // 2.
// retailCompanies = companies.filter(company => (company.category==='Retail' || company.category==='Finance')) 
// console.log(retailCompanies)

// // Filter 80s companies 
// console.log('\nfilter 80s companies')

// const eightiesCompanies = companies.filter(company => (company.category==='Finance' && company.start>=1980 && company.start<=1989));
// console.log(eightiesCompanies)

// // Get companies that lasted 10 years or more
// console.log('\nfilter companies that lasted 10 years or more')
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears)

// // map > using map we can create new arrays using the elements inside the array.

// // Create array of company names
// let companyNames = companies.map(function(company) {
//   return company.name
// })
// console.log(companyNames)

// // // Using arrow function
// companyNames = companies.map((company) => company.name)
// console.log(companyNames)


// // What you can also do using map,
// // customize the Elements in the array that you create.

// console.log(companies)

// let testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`
// })
// console.log(testMap)


// // Using Arrow function 
// testMap = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`)
// console.log(testMap)



// // Practice
// Given an array ages, create another array with squares of the values in ages
let squares = ages.map((age) => age*age)
console.log(squares)


// // Given an array ages, create another array with squareroots of the values in ages
let squareroots = ages.map((age) => Math.sqrt(age))
console.log(squareroots)

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2)

// // sort

// // Sort companies by start year
let sortedCompanies  = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})
console.log(sortedCompanies)

// // What is happening here is we are pushing the up or down based on start year

// // Using arrow function
let revSortedCompanies = companies.sort((a, b) => (a.category > b.category? 1 : -1))
console.log(revSortedCompanies)

// // Sort ages
const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges)


// // reduce > can be used for a lot of things
// // Add all the ages from the ages array 

// // using a for loop
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum)

// // using reduce 
ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(ageSum)

// // using reduce with arrow function 
ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)

// // Get the sum of actve years for all companies

let totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totalYears)


totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

// // Combine Methods

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);



// jQuery
// Link : https://www.youtube.com/watch?v=pk3tsynNZ0w