const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res){
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./home.html').pipe(res);
    }
    if (req.url === '/about.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./about.html').pipe(res);
    }
    if (req.url === '/contact.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contact.html').pipe(res);
    }
    // Redirect home to root directory
    if (req.url === '/home.html') {
        res.writeHead(302, {'Location': '/'});
        res.end();
    }
})

server.listen(8000, 'localhost');

if (server.listen) console.log("Server is listening on 8000");