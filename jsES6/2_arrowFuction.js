//! ES5
// function showHello(name,message){
//     return message + " " + name
// }

//! เขียนแบบ first class function
const showHello = function(name,message){
    return message + " " + name
}
console.log(showHello("bill" , "hello"));

//! ES6 Arrow Function
const Arrow = (name,message) => {
    return message + " " + name
}
console.log(Arrow("murray" , "hello"));

//! ลดรูป Arrow Function ในกรณี return ค่าเดียว 
const Arrow2 = (name,message) =>  message + " " + name
console.log(Arrow2("billmurray" , "hello"));

//! ลดรูปลงไปอีก ในกรณีที่มี parameter เพียงค่าเดียว
const Arrow3 = name =>  "Hello " + name
console.log(Arrow3("nitipat" , "hello"));

// EX.
function sayHi(name){
    const result = "Hello " + name
    return result
}
console.log(sayHi("John"));

const sayHi1 = name => "Hello " + name
console.log(sayHi1("Jennie"));
// OR 
const sayHi2 = (name = "gg") => `Hello ${name}`
console.log(sayHi2("Jennie"));
console.log(sayHi2()); //Hello undefined
