import {cube} from './math'
import style from './style.css'
import './moment'

export const say_hello = () => {
    let html = `<div>
                <p>我是内容</p>
                <p>我是内容</p>
               </div>`
    document.getElementById('root').innerHTML = html
    
}

export const calc = () => {
        let num = cube(2),
        html = `2*2*2答案等于${num} ,对么,yese？`
        document.getElementById('root').innerHTML = html
       console.log()
}