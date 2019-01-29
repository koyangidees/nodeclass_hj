const http = require('http');

const server = http.createServer((req, res) => {
    console.dir(req);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.listen(4000, () => {
    console.log("Server is running!");
});

