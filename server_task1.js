const http = require('http');

var hostname = 'localhost';
var port = 5000;

// Create the server
const server = http.createServer((req, res) => {
  // Check the request URL and handle accordingly
  if (req.url === '/') {
    res.statusCode = 200;  // 200 (OK)
    res.end('Home Page.');  // Send the response
  } 
  else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page.');  
  } 
  else if (req.url === '/contact') {
    res.statusCode = 200; 
    res.end('Contact Page.');  
  } 
  else {
    res.statusCode = 404;  // Set status code to 404 (Not Found)
    res.end('Invalid Request!');
  }
});

// Start the server on port 5000
server.listen(port, hostname, () => {
  console.log('The NodeJS server on port 5000 is now running….');
});
