const axios = require('axios');


exports.getNewsAndEmit = function(socket) {
    // Getting the data from API
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWSAPI_SECRET_KEY}`)
        .then(response => socket.emit("getNews", response.data)) // Emitting a new message. It will be consumed by the client
        .catch(err => console.log(err));
};

exports.getWeatherAndEmit = function(socket) {
    // Getting the data from API
    axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/42.3601,-71.0589`)
        .then(response => socket.emit("getWeather", response.data)) // Emitting a new message. It will be consumed by the client
        .catch(err => console.log(err));
}

exports.getFinanceAndEmit = function(socket) {
    // Getting the data from API
    axios.get('https://www.freeforexapi.com/api/live?pairs=USDEUR,USDCAD,USDGBP,USDAUD,USDCHF,USDNZD,USDILS')
        .then(response => socket.emit("getFinance", response.data.rates)) // Emitting a new message. It will be consumed by the client
        .catch(err => console.log(err));
};

exports.getSportsAndEmit = function(socket) {
    // Generate random game ID from the last 100 games
    let gameId = Math.floor(Math.random() * 100 + 1);

    const config = {
        headers: { 
            'x-rapidapi-host': 'free-nba.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPIDAPI_SECRET_KEY
        },
    };
    
    // Getting the data from API:
    // Getting the game details object
    axios.get(`https://free-nba.p.rapidapi.com/games/${gameId}`, config)
    .then(game => {
        // Getting the home team logo (another API)
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${game.data.home_team.full_name}`)
        .then(home_team => {
            const home_team_logo = home_team.data.teams[0].strTeamBadge;
            // Getting the visitor team logo
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${game.data.visitor_team.full_name}`)
            .then(visitor_team => {
                const visitor_team_logo = visitor_team.data.teams[0].strTeamBadge;
                const obj = { ...game.data, home_team_logo, visitor_team_logo }; 
                socket.emit("getSports", obj); // Emitting a new message. It will be consumed by the client
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));    
    }) 
    .catch(err => console.log(err));
};