import React, {Component} from 'react'
import styles from './style.css'

export default class extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(this)
        console.log('网页scroll大小：', document.body.scrollWidth, document.body.scrollHeight)
        console.log('网页大小：', document.body.clientWidth, document.body.clientHeight)
        console.log('网页大小：', document.documentElement.clientWidth, document.documentElement.clientHeight)
        console.log(document.documentElement.scrollTop)
        console.log(document.documentElement.scrollLeft)
        console.log(this.img)
        console.log(this.img.src)
        console.log('data:', this.img.dataset.originalsrc)
    }

    render() {
        return (
            <div className={styles.container}>
                <img ref={(ref) => {
                    this.img = ref
                }} data-originalSrc='http://exampleimg.png' name='http://exampleimg.png'
                     src="http://marry.qiniudn.com/o_1a3850v6l1jf03jg36461g1jkgi.png" alt=""/>
                <h1 className='h1title' ref={(title) => {
                    this.title = title
                }}>when you see this text,that show you now is successed</h1>
            </div>
        )
    }

}