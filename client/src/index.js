import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import portalReducer from './store/reducers/portalReducer';


const store = createStore(portalReducer, applyMiddleware(ReduxThunk));

const AppRedux = () => {
    return (
        <Provider store={store} > 
            <App />
        </Provider>
    )
}

ReactDOM.render(<AppRedux />, document.getElementById('root'));

serviceWorker.unregister();
