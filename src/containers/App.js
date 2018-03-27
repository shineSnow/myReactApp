import React from 'react'

import {Router, hashHistory}  from'react-router'
import routeConfig from '../routes'

export default class extends React.Component {
    render() {
        return (<Router history={hashHistory} routes={routeConfig}/>)
    }
}
