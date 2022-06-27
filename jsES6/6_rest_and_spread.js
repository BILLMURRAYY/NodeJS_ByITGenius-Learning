//! Spread Operator คือการกระจายสมาชิกของ arr ออกมา
const arr = [4,5,6]
const append = [1,2,3, arr]
const appendsp = [1,2,3, ...arr] //Spread Operator

console.log(append)
console.log(appendsp)

//! Rest Parameter คือการรับค่ามากกว่า 1 ตัว
const howManyAgrs = (...args) => {
    console.log(args.length)
    console.log(args)
}

howManyAgrs()
howManyAgrs(4)
howManyAgrs(6,8)
howManyAgrs(8,7,9,10,16)

console.log("//////////////////////");
// Exercise
function multiply(multiplier, ...array){
    console.log(array)
    return array.map(e => multiplier * e)
}
console.log(multiply(3,2,3,4));
const result = multiply(2,2,3,4)
console.log(result);