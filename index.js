// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public"))); 

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('user-message', (msg) => {
    console.log('Received:', msg);

    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
