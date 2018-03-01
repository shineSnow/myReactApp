import 'normalize.css';
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import {Button} from 'antd'

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
    </div>
    ,document.getElementById('root')
);