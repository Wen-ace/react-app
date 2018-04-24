import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RRR from './router/router';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <RRR />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();