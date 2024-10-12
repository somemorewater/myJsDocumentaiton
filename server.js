const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'basics', 'index.html');

  readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error loading the file.');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
