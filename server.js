const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const body = req.url === '/css/style.css' ?
        fs.readFileSync('./public/sass/style.css', 'utf8') :
        fs.readFileSync('./public/index.html', 'utf8');
    res.end(body);
});

const port = process.env.PORT || 8081;

server.listen(port);

console.log(`Server started on port ${port}`);