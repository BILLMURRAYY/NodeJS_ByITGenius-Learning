///! ปัญหาของ var
// var fname = "bill"
// {
//     var fname = "jennie"
//     console.log(fname) // jennie
// } 
// console.log(fname) // jennie

///! การใช้ let
// let nameg = "bill"
// {
//     let nameg = "jennie"
//     console.log(nameg); // jennie
// }
// console.log(nameg) // bill
// // การใช้ let สามารถเปลี่ยนค่าได้
// nameg = "murray"
// console.log(nameg) // murray

///! การใช้ const ประกาศตัวแปรแล้วเปลี่ยนค่าไม่ได้
const firstname = "nitipat"
//ลองเปลี่ยนค่าตัวแปร const ดู
// firstname = "billmurrayy"
console.log(firstname);