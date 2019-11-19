require("dotenv").config();
const express = require("express");
const app = express();
const http = require('http');
const socketIo = require('socket.io');
// const cors = require('cors');

// Import index route
const index = require('./routes/index');

const { getNewsAndEmit, getWeatherAndEmit, getFinanceAndEmit, getSportsAndEmit } = require('./controllers/index');

// Use route
app.use(index);

// app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods','*')
//         next()
// })

// Server instance
const server = http.createServer(app);

// Create socket using the instance of the server
const io = socketIo(server);

// The callback will be execute after every connection event
io.on("connection", socket => {
    console.log("New client connected");
    setTimeout(() => getNewsAndEmit(socket), 1000);
    setTimeout(() => getWeatherAndEmit(socket), 1000); 
    setTimeout(() => getFinanceAndEmit(socket), 1000);
    setTimeout(() => getSportsAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server running on port ${port}`));


