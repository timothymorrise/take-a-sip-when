// server.js
// ==============================

// ==============================

// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const data = require('./data')
const PORT = 4000


const app = express();

// apply middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/sse', require('./routes/sseRouter'))

// PORT/listen
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))