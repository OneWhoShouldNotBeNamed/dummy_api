// console.log('Hello World')

// event loop
// console.log('one')

// setTimeout(() => {
//     console.log('two')
// }, 2000);

// console.log('three')


// modules
// const detail = {
//     name: 'foobar',
//     printName: function(){
//         console.log(this.name);
//     }

// }
const { shout } = require('./func')
const fs = require('fs')

// const name = shout('tim')
// const greeting = func.greet('tim')
// console.log(name)

const fdata = fs.readFileSync('index.html', 'utf-8')
console.log(fdata)



