import 'normalize.css';
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import {Router, browserHistory}  from'react-router'
import routeConfig from './routes'
if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <Router history={browserHistory} routes={routeConfig}/>
    ,document.getElementById('root')
);