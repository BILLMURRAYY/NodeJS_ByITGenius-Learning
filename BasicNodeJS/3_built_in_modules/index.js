// Node.js Built-in Modules
// ------------------------
// 1. File System (fs)
// 2. Path (path)
// 3. Operating System (os)
// 4. Events (events) //? Do web server
// 5. HTTP (http) //? Do web server
// ------------------------

//! 2. Path (path) 
const path = require('path')

console.log(path.basename(__filename)); //อ่านชื่อไฟล์
console.log(path.dirname(__filename)); // อ่านdirectory
console.log(path.extname(__filename)); // อ่านสกุลไฟล์
console.log(path.parse(__filename)); // อ่านค่าหลายอย่างพร้อมกัน เป็นรูปแบบ Object
console.log(path.parse(__filename).base); // อ่านค่าหลายอย่างพร้อมกัน เป็นรูปแบบ Object [. เพื่อเลือกว่าจะอ่านค่าอะไร]

//! 1. File System (fs) Read / Write FILE
const fs = require('fs')

//? WriteNewFile สร้างไฟล์ใหม่
// fs.writeFileSync(path.dirname(__filename)+data.txt,"BILLMURRAY") //Sync +data.txt แบบนี้จะใช้ไม่ได้
fs.writeFileSync(path.join(__dirname,'data.txt'),'Hello BILLMURRAY') //Sync ต้องใช้ .join() แทน
// fs.writeFile //Async

//? ReadFile อ่านไฟล์ด้วย module fs
console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8')); //set utf8 ด้วย
// fs.readFileSync() //Async


//! 3. Operating System (os)
const os = require('os');

console.log(os.cpus())
console.log(os.hostname()) //ดู HostName
console.log(os.uptime()) //ดู ว่าเปอดคอมมาแล้วกี่น่าที
console.log(os.platform()) //ดู
console.log(os.release()) //ดู
console.log(os.arch()) //ดู
console.log(os.type()) //ดู
console.log(os.loadavg()) //ดู
console.log(os.networkInterfaces()) //ดู
console.log(os.networkInterfaces()['Wi-Fi'][1].family) //ดู

