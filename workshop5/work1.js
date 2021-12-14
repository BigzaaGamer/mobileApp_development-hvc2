// Konkamon Sion
const http = require('http');
const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var myObj = {
        member1:{
            name:"ชื่อคนที่ 1 ",
            nickname: "ชื่อเล่นคนที่ 1",
            num: "เลขที่คนที่ 1",
            email: "email คนที่ 1"
        },
        member2:{
            name:"ชื่อคนที่ 2",
            nickname: "ชื่อเล่นคนที่ 2",
            num: "เลขที่คนที่ 2",
            email: "email คนที่ 2"
        }
    };
        
    if (req.url === '/'){
        res.write(`Home Page`);
        res.end();
    }
    if (req.url === '/contact') {
        res.write(JSON.stringify(myObj));
        res.end();
    }
});
server.on('connection', (socket) =>{
    console.log('[INFO] - Client Connected!');
});

server.listen(PORT);
console.log(`Listening on: http://localhost:${PORT}`);
