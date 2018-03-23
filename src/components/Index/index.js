import React, {Component} from 'react'
import Api from 'API/index'
import style from './style.css'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrList:[]
        }
    }
    componentDidMount(){
        Api.getBaozouList().then(res => {
            return res.json()
        }).then(result => {
            let {code,data} = result
            console.log(code,data)
            this.setState({
                arrList: data
            })
        })
    }
    render() {
        console.log(this)
        return (
            <div className={style.wrap}>
                <h3>配置千奇百怪,查阅大量资料，有时候也不是很清楚只能走一步是一步</h3>
                {
                    this.state.arrList.map((val, i) =>{
                        return <div>
                                     <img key={val.goodsId} src={val.goodsImage}/><span>{val.goodsId}</span>
                               </div>

                    })
                }
            </div>
        )
    }
}