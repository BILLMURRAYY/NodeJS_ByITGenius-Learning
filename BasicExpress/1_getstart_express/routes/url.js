// Import Express
const express = require('express')

// Create Router
const router = express.Router() // จัดการ URL

// Create Routing Method
router.get('/',(req,res)=>{
    // res.send('<h1>Hello Express</h1>') // ส่งข้อมูลไปเป็น text
    res.render('pages/index.ejs') // render File Html | default ที่ views
}) // อ่านข้อมูล

router.get('/about',(req,res)=>{
    // res.send('<h1>Hello Express</h1>') // ส่งข้อมูลไปเป็น text
    res.render('pages/about.ejs') // render File Html | default ที่ views
}) // อ่านข้อมูล

router.get('/api/user/:id',(req,res)=>{
    res.send(`Hello User ID: ${req.params.id}`) // ต้องใช้ req ด้วย เพื่อรับค่าreq
}) // 

router.post('/api',(req,res)=>{
    res.send("POST API") // Test in Commandline [ทกสอบยิงAPI]-> curl -X POST http://localhost:3000/api
    // res.json({name:'BILL',email:'gg@gmail.com'})
}) // 

module.exports = router