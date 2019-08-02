import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "@/store/index";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// 将数据仓库注册全局
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
