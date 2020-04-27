import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Store/store';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
const rootEl = document.getElementById('root')

ReactDOM.render(
        <Provider store={store}> 
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>    
            </BrowserRouter>
        </Provider>
        ,rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
