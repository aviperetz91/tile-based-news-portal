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


const getNewsAndEmit = socket => {
    // Getting the data from API
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_SECRET_KEY}`)
        .then(response => socket.emit("getNews", response.data)) // Emitting a new message. It will be consumed by the client
        .catch(err => console.log(err));
};

const getWeatherAndEmit = socket => {
    // Getting the data from API
    // axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233`)
    //     .then(response => socket.emit("getWeather", response.data)) // Emitting a new message. It will be consumed by the client
    //     .catch(err => console.log(err));
};

// const getFinanceAndEmit = socket => {
//     // Getting the data from API
//     axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=' + process.env.ALPHA_VANTAGE_API_SECRET_KEY)
//         .then(response => {
//             keysArray = Object.keys(response.data);
//             keysArray2 = Object.keys(response.data[keysArray[1]]);
//             obj = response.data[keysArray[1]][keysArray2[0]];
//             socket.emit("getFinance", obj)
//         }) 
//         .catch(err => console.log(err));
// };


const getFinanceAndEmit = socket => {
    // Getting the data from API
    axios.get('https://api.exchangeratesapi.io/latest?base=ILS')
        .then(response => {
            const key = Object.keys(response.data);
            // const obj = response.data[key[0]];
            const obj = response.data[key[0]];
            // console.log(obj);
            socket.emit("getFinance", obj)
        }) 
        .catch(err => console.log(err));
};


const getSportsAndEmit = socket => {
    let id = Math.floor(Math.random() * 1000 + 1);

    const config = {
        headers: { 
            'x-rapidapi-host': 'free-nba.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPIDAPI_SECRET_KEY
        },
    };
    
    // Getting the data from API
    axios.get(`https://free-nba.p.rapidapi.com/games/${id}`, config)
        .then(response => {
            socket.emit("getSports", response.data)  // Emitting a new message. It will be consumed by the client
        }) 
            
        .catch(err => console.log(err));
};


// The callback will be execute after every connection event
io.on("connection", socket => {
    console.log("New client connected");
    setInterval(() => getNewsAndEmit(socket), 3000);
    setInterval(() => getWeatherAndEmit(socket), 10000); 
    setInterval(() => getFinanceAndEmit(socket), 5000);
    setInterval(() => getSportsAndEmit(socket), 2000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});


const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server running on port ${port}`));


