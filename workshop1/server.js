const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/hello.html')) //เปิดไฟล์ html
    //res.send("Hello Konkamon Sion<br>Hello Puridech Keawsuriya!")
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
})

module.exports = app
