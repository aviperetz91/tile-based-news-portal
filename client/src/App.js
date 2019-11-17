import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: false,
      weather: false,
      finance: false,
      sports: false,
      endpoint: "http://localhost:4000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("getNews", data => this.setState({ news: data}));
    socket.on("getWeather", data => this.setState({ weather: data}));
    socket.on("getFinance", data => {
      console.log(data);
      this.setState({ finance: data})
    });
    socket.on("getSports", data => this.setState({ sports: data}));
  }
   
    

  render() {
    const { news, weather, finance, sports } = this.state;
    let keysArr = Object.keys(this.state.finance);
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          {news
              ? <p>
               { news.articles[0].title }
              </p>
              : <p>Loading...</p>}
        </div>
        <div style={{ textAlign: "center" }}>
          {weather
              ? <p>
                The temperature in { weather.timezone } is: {weather.currently.temperature} °F
              </p>
              : <p>Loading...</p>}
        </div>
        <div style={{ textAlign: "center" }}>
          {finance
              ? <p>
               USD: { finance['USD'] }
              </p>
              : <p>Loading...</p>}
        </div>
        <div style={{ textAlign: "center" }}>
          {sports ? 
            <div> 
              <p>{`${sports.home_team.city} ${sports.home_team.name}`}</p>
              <p>{ sports.home_team_score }</p>
            </div>
              : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
