import { SET_NEWS, SET_WEATHER, SET_FINANCE, SET_SPORTS } from '../actions/portalActions';

const initialState = {
    newsObj: false,
    weatherObj: false,
    financeObj: false,
    sportsObj: false,
}

const portalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS:
            return {
                ...state,
                newsObj: action.newsObj
            }
        case SET_WEATHER:
            return {
                ...state,
                weatherObj: action.weatherObj
            }
        case SET_FINANCE:
            return {
                ...state,
                financeObj: action.financeObj
            }
        case SET_SPORTS:
            return {
                ...state,
                sportsObj: action.sportsObj
            }
        default: 
            return state;
    }
}

export default portalReducer;