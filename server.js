const http = require('http');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case '/':
      res.end('hello world');
      break;
    case '/overview':
      res.end('hello overview');
      break;

    default:
      break;
  }
});

server.listen(3000);
