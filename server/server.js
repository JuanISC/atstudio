const express = require('express');
const app = express();
const http = require("http");
const host = 'localhost';
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


// app.use(express.static(path.join(__dirname, '../dist/atstudio')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/atstudio/index.html'));
// });


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});