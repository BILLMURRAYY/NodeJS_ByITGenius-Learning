// Import HTTP Module สำหรับไว้สร้าง Web Server
const http = require('http')

// Import Path module เพื่ออ่านไฟล์ html
const path = require('path')

// Import File module
const fs = require('fs')

// อ่าน File html
const getPage = (page) => {
    const filepath = path.join(__dirname,page)
    return fs.readFileSync(filepath)
}

// Creat Server
http.createServer((req,res) => { // use req เพื่อทำการสร้างเงื่อนไข

    const fileType = path.extname(req.url) || '.html'
    if(fileType === '.html'){
        res.setHeader('Content-Type','text/html')

        res.write('<h1>Hello BILLMURRAY</h1>')
        res.write('<h1>GG EZ</h1>')
        if(req.url === '/'){
            res.write(getPage('index.html'))
        }else if(req.url === '/about'){
            res.write(getPage('about.html'))
        }
        res.end()
    }else if(fileType === '.css'){
        res.setHeader('Content-Type','text/css')
        res.write(getPage('style.css'))
        res.end()
    }

    
}).listen(3000) // set port hocalhost