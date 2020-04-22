import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

function handleChange() {

   let variab = store.getState();
    console.log('store changed', variab );

}

const unsubscribe = store.subscribe(handleChange);
unsubscribe();

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
