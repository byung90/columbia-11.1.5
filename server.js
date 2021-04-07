const http = require('http');
const fs = require('fs');

const PORT = 8080;

const handleRequests = (request, response) => {
  let url;
  let statusCode = 200;
  switch (request.url) {
    case '/food':
      url = 'food';
      break;
    case '/framework':
      url = 'framework';
      break;
    case '/movie':
      url = 'movie';
      break;
    case '/':
      url = 'index';
      break;
    default:
      url = '404';
      statusCode = 404;
  }

  fs.readFile(`${__dirname}/${url}.html`, (err, data) => {
    if (err) throw err;
    response.writeHead(statusCode, { 'Content-Type': 'text/html' });
    response.end(data);
  })
}

const server = http.createServer(handleRequests);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});