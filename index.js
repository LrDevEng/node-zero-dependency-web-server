import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const port = 3000;
const dir = './public';
const baseFile = 'index.html';

// Object to look up http content-type based on requested file extension
const extToContentType = {
  '.html': 'text/html',
  '.htm': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.txt': 'text/plain',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Parse endpoint based on requested url
    const url = req.url;
    const extname = path.extname(url);
    const endpoint =
      extname.length > 0
        ? dir + url
        : dir + (url.endsWith('/') ? url : url + '/') + baseFile;

    if (fs.existsSync(endpoint)) {
      // Setup positiv response head with content type based on file extension
      res.writeHead(200, {
        'Content-type': extToContentType[path.extname(endpoint)],
      });
      // Read requested endpoint file from file system and pass to response
      fs.createReadStream(endpoint)
        .on('error', (error) => {
          console.log(error.message);
        })
        .pipe(res);
    } else {
      // Respond with error in case requested endpoint does not exist
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end('404: No such file or directory.');
    }
  }
});

// Start server and listen on specified port and address
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
