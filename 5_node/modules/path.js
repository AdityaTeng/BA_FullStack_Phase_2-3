// Path - core module
const path = require('path')

// // Base file name
console.log(`File Name: ${path.basename(__filename)}`)

// // Directory name
console.log(`Directory Name:${path.dirname( __filename)}`)

// // File extension
console.log(`File Extension: ${path.extname(__filename)}`)

// // get the parent folder director
const parentDir = path.dirname(__dirname);
console.log(`Parent Directory: ${parentDir}`);

// // Create path object
console.log(path.parse(__filename))   //.base

// // Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));



// Link: https://nodejs.org/docs/latest-v12.x/api/path.html
