// server.js
// ==============================

// ==============================

// imports
const express = require('express');
const bodyParser = require('body-parser');
const http = require("http");
const socketIo = require("socket.io")
const cors = require('cors');

// variables
const PORT = 4000
const app = express();

// apply middleware
const io = socketIo(server); // < fun
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// sockets
io.on("connection", (socket) => {

}

// routes


// PORT/listen
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))