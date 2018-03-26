import React ,{Component} from 'react'
import style from './style.css'

export default class extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <h1 className={style.nofound}> 404s not found</h1>
            </div>
        )
    }
}