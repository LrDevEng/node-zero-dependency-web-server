import http from 'node:http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  res.write('Hello client.');
  res.end();
});

server.listen(PORT);
