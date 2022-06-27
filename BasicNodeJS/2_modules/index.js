// Import แบบที่ 1 จะใช้ require('') แทนคำว่า import
const util = require('./util')

// call util.js
util.sayHello()
const vat = util.calculateVat(100,7)
console.log(vat)


// Import แบบที่ 2 use Destructing **HIT**
const {calculateVat,sayHello} = require('./util')

sayHello()
const vat2 = calculateVat(300,7)
console.log(vat2)