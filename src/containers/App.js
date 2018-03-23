import React from 'react'

import {Router, browserHistory}  from'react-router'
import routeConfig from '../routes'

export default class extends React.Component {
    render() {
        return (<Router history={browserHistory} routes={routeConfig}/>)
    }
}
