require("dotenv").config();
const express = require("express");
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');

// Import index route
const index = require('./routes');

// Import functions from controller
const { getNewsAndEmit, getWeatherAndEmit, getFinanceAndEmit, getSportsAndEmit } = require('./controllers');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use route
app.use('/api', index);

// Server instance
const server = http.createServer(app);

// Create socket using the instance of the server
const io = socketIo(server);

// The callback will be execute after every connection event
io.on("connection", socket => {
    console.log("New client connected");
    setTimeout(() => getNewsAndEmit(socket), 1000);
    setTimeout(() => getWeatherAndEmit(socket), 2000); 
    setTimeout(() => getFinanceAndEmit(socket), 3000);
    setTimeout(() => getSportsAndEmit(socket), 4000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server running on port ${port}`));


