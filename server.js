const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    let body = null;
    try {
        const ext = req.url.split('.')[1];
        console.log(ext);
        const isSvg = ext === 'svg';
        if (isSvg) {
            res.setHeader('Content-Type', 'image/svg+xml');
        }
        body = fs.readFileSync(`./public${req.url}`);
    } catch (err) {
        body = fs.readFileSync(`./public/index.html`);
    }

    res.end(body);
});

const port = process.env.PORT || 8081;

server.listen(port);

console.log(`Server started on port ${port}`);