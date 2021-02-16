const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const body = req.url === '/css/style.css' ?
        fs.readFileSync('./public/css/style.css', 'utf8') :
        fs.readFileSync('./public/index.html', 'utf8');
    // const body = fs.readFileSync('./public/index.html', 'utf8');
    res.end(body);
});

server.listen(8081);

console.log('Server started!');