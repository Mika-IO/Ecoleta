const express = require('express');
const server = express()

server.use(express.static('public'))

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')    
});

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + '/views/create-point.html')    
});

server.get("/search-result", (req, res) => {
    res.sendFile(__dirname + '/views/search-result.html')    
});

server.listen('80');