const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')

const server = express();

//middleware
server.use(function (req, res, next) {
    console.log('middleware 1')
    next();
});

server.use(function (req, res, next) {
    console.log('middleware 2')
    const loggedIn = true;
    if (!loggedIn) {
        res.status(400).send('Not Logged In')
    } else {
        next();
    }
});

server.get('/', function (req, res) {
    console.log('page-requested');
    res.send(`<html><h1>Hello CS5!!</h1><p>This is a very long paragraph under my main div</p></html>`);
})

const clientUrl = path.join(__dirname, 'client'); // Serving Speciffic Folders from the server

server.use('*', express.static(clientUrl)); // Setting the server to serve the speciffic folder.

const port = 8000;
server.listen(port, () => console.log(`Server is listening on localhost:${port}`));