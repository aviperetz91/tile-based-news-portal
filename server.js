require("dotenv").config();
const express = require("express");
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

// Import index route
const index = require('./routes/index');

// Use route
app.use(index);

// Server instance
const server = http.createServer(app);

// Create socket using the instance of the server
const io = socketIo(server);

const getApiAndEmit = socket => {
    // Getting the data from API
    axios.get('https://api.darksky.net/forecast/' + process.env.DARKSKY_SECRET_KEY + '/42.3601,-71.0589')
        .then(response => socket.emit("FromAPI", response.data)) // Emitting a new message. It will be consumed by the client
        .catch(err => console.log(err));
};

let interval;
// The callback will be execute after every connection event
io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 10000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});


const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server running on port ${port}`));


