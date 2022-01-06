const express = require('express')
const app = express()
const path = require('path')
const PORT = 6969

const server = app.listen(PORT, () => {
    console.log(`Running On http://localhost:${PORT}`)
})

const io = require('socket.io')(server)

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use('/bulma', express.static(__dirname + '/node_modules/bulma'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/bruh', (req, res) => {
    res.render('index2')
})


io.on('connection', function(socket){
    console.log("New Socket Connected!: ", socket.id);
    socket.on('chatter', function(name, message){
        console.log(`[${name}]Message: ` + message);
        io.emit('chatter', name, message);
    })
})