const http = require('http');
const fs = require('fs');
const path = require('path');

var hostname = 'localhost';
var port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    // Serve home.html
    fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;  // Internal Server Error
        res.end('Error reading home.html');
        return;
      }
      res.statusCode = 200;  // OK
      res.end(data);  // Serve the content of home.html
    });
  } 
  else if (req.url === '/about') {
    // Serve about.html
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading about.html');
        return;
      }
      res.statusCode = 200;
      res.end(data);  
    });
  } 
  else if (req.url === '/contact') {
    // Serve contact.html
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading contact.html');
        return;
      }
      res.statusCode = 200;
      res.end(data);
    });
  } 
  else {
    // invalid URLs
    res.statusCode = 404;  // Not Found
    res.end('Invalid Request!');  // Return error message for invalid URLs
  }
});

// Start the server on port 5000
server.listen(port, hostname, () => {
  console.log('The NodeJS server on port 5000 is now running….');
});
