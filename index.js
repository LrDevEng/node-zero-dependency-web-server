import http from 'node:http';
import path from 'node:path';

const PORT = 3000;
const DIR = './public';
const BASE_FILE = 'index.html';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const url = req.url;
    const extname = path.extname(url);
    const endpoint =
      extname.length > 0
        ? DIR + url
        : DIR + (url.endsWith('/') ? url : url + '/') + BASE_FILE;

    console.log(endpoint);
  }

  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  res.write('Hello client.');
  res.end();
});

server.listen(PORT);
