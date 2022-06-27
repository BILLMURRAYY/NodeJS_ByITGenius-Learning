// ต้องมี file package.json ด้วย โดยเพิ่ม "type": "module"
//! Import วิธีที่ 1
import {sayHi , sayBye} from './say.js'
sayHi("Bill")
sayBye("BILL")

//! Import แบบทั้งหมด
import * as say from './say.js';
say.sayHi("time")
say.sayHi("nitipat")

//! Import จาก class ที่เป็นแบบ export defualt มา
import User from './user.js';
// เวลาสร้าง Class แล้วจะเรียกใช้ ต้องสร้าง Object ก่อน 
const obj = new User("Jennie")
console.log(obj.name);
obj.sayHi();