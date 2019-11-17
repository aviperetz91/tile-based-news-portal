import socketIOClient from "socket.io-client";

export const SET_NEWS = 'SET_NEWS';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_FINANCE = 'SET_FINANCE';
export const SET_SPORTS = 'SET_SPORTS';

const socket = socketIOClient('http://localhost:4000');


export const getNews = () => {
    return dispatch => {
        socket.on('getNews', newsObj => {
            dispatch({ type: SET_NEWS, newsObj })
        })
    }
}

export const getWeather = () => {
    return dispatch => {
        socket.on('getWeather', weatherObj => {
            dispatch({ type: SET_WEATHER, weatherObj })
        })
    }
}

export const getFinance = () => {
    return dispatch => {
        socket.on('getFinance', financeObj => {
            dispatch({ type: SET_FINANCE, financeObj })
        })
    }
}

export const getSports = () => {
    return dispatch => {
        socket.on('getSports', sportsObj => {
            dispatch({ type: SET_SPORTS, sportsObj })
        })
    }
}