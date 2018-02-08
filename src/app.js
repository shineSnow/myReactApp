import 'normalize.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {test} from './views/Test/index'

if(module.hot) { module.hot.accept()}

setTimeout(test,3000)
ReactDOM.render(
    <h1>Hello, world hwllo!</h1>,
    document.getElementById('root')
);