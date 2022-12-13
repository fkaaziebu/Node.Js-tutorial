console.log("Hello World");

/**
 * How NodeJS differs from Vanilla JS
 * 1) Node runs on a server - not in a browswer (backend not frontend)
 * 2) The console is the terminal window
 * 3) Global object instead of window object
 * 4) Has Common Core modules that we will explore
 * 5) CommonJS modules instead of ES6 modules
 * 6) Missing some JS API like fetch
 */

const os = require('os');
const path = require('path')

// Function distructuring
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))