// Import Express
const express = require('express')

// Import Router
const urlRouter = require('./routes/url')

// Create Express Object
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ที่ไหน
app.use(express.static('assets'))

// เรียกใช้งาน Router
app.use('',urlRouter)

// Run Express Server
app.listen(3000,()=>{
    console.log("Listening to Port : 3000");
})