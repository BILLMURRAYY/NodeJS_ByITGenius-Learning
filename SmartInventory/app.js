// Import Express
const express = require('express')

// Import EJS Layout
const expressLaouts = require('express-ejs-layouts')

// Import Router frontend.js
const frontendRouter = require('./routes/frontend')

// Create express
const app = express()

// กำหนด folder สำหรับบอกตัว css , images
app.use(express.static('assets'))

// กำหนด Template Engine
app.use(expressLaouts)
app.set('layout','./layouts/frontend')
app.set('view engine','ejs')

// เรียกใช้งาน Router
app.use('/',frontendRouter)

// Run Exprress Server Port 5000
app.listen(5000,()=>{
    console.log("Server Run at Port : 5000");
})