require("dotenv").config();
const express = require("express");
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import index route
const index = require('./routes');

// Import functions from controller
const { getNewsAndEmit, getWeatherAndEmit, getFinanceAndEmit, getSportsAndEmit } = require('./controllers');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Allow only origin http://localhost:3000 access the server
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// Use route
app.use('/api', index);
    
// Server instance
const server = http.createServer(app);

// Create socket using the instance of the server
const io = socketIo(server);

// The callback will be execute after every connection event
io.on("connection", socket => {
    console.log("New client connected");
    getNewsAndEmit(socket);
    getWeatherAndEmit(socket);
    getFinanceAndEmit(socket);
    getSportsAndEmit(socket);
    // setTimeout(() => getNewsAndEmit(socket), 1000);
    // setTimeout(() => getWeatherAndEmit(socket), 2000); 
    // setTimeout(() => getFinanceAndEmit(socket), 3000);
    // setTimeout(() => getSportsAndEmit(socket), 4000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server running on port ${port}`));


