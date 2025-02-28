// Create web server
// Create a web server that listens for HTTP requests on port 3000. It should respond to requests to the URL /comments with the text "You are on the comments page". Use the createServer method from the http module. The server should respond to GET requests with the text "You are on the comments page". You can use the writeHead and end methods from the response object to send the response.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You are on the comments page');
  }
});

server.listen(3000);