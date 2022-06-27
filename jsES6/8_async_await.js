const f = async() => {
    const promise = new Promise((resolve , reject) =>{
        console.log("loading...") //แสดงลำดับที่ 1
        
        setTimeout(() => {
            // console.log("Hello"); 
            resolve("load seccess");//แสดงลำดับที่ 2
        }, 3000); //3sec ถึงจะแสงดข้อมูล

        console.log("Do any thing...");//แสดงลำดับที่ 1
        
    })
    const result = await promise //มันจะรอจนครบกำหนด ถึงจะคืนค่ากลับมา
    console.log(result)
}
f()


//! Function ไม่ใส่ชื่อ
// console.log(() => {
//     console.log("Hello");
// });
//// มาจาก Function เปล่าๆ ที่ไม่ได้กำหนดชื่อ
// () => {
//     console.log("Hello");
// }