// Import Express
const express = require('express')

// Create Router
const router = express.Router() // จัดการ URL

// Create Routing Method
router.get('',(req,res)=>{
    res.render('pages/frontend/index',{title:'Home'}) 
})

router.get('/about',(req,res)=>{
    res.render('pages/frontend/about',{title:'About'}) 
})

module.exports = router