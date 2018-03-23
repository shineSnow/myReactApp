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
            this.setState({
                arrList: data
            })
        })
    }
    render() {
        // console.log(this)
        return (
            <div className={style.wrap}>
                <h3>配置千奇百怪,查阅大量资料，有时候也不是很清楚只能走一步是一步</h3>
                <ul>
                    {
                        this.state.arrList.map((val, i) =>{
                            return  <li key={val.goodsId}>
                                <img src={val.goodsImage}/>
                                <span>{val.goods.introduce}</span>
                                <span className="price">价格：￥{val.goods.marketPrice}</span>
                                <p className="des">{val.goods.title}</p>
                                <p className="address">{val.goods.goodsSource}</p>
                            </li>

                        })
                    }
                </ul>

            </div>
        )
    }
}