const http = require("http");
const port = 1000;


const server = http.createServer((req,res) => {
    switch(true){
        case req.url==="/" && req.method==="GET":
            res.setHeader('Content-Type', 'text/html; Charset=utf-8');
            res.writeHead(200);
            res.end('<h1>Elso oldal vagy masodik</h1><a href="/elso">Elsore</a>');
            break;
            case req.url==="/elso" && req.method==="GET":
                res.setHeader('Content-Type', 'text/html; Charset=utf-8');
                res.writeHead(200);
                res.end('<h1>Elso oldal</h1><a href="/masodik">Masodikra</a>');
            break;
                case req.url==="/masodik" && req.method==="GET":
                    res.setHeader('Content-Type', 'text/html; Charset=utf-8');
                    res.writeHead(200);
                    res.end('<h1>Masodik oldal</h1><a href="/elso">Elsore vissza</a>');
        break;
                default:
                    res.setHeader('Content-Type', 'text/html; Charset=utf-8');
                    res.writeHead(404);
                    res.end('<h1>Hiba</h1><a href="/">Vissza a fooldalra</a>');
    }
})
server.listen(port, () => {
    console.log('mukdoik');
})