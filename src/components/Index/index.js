import React, {Component} from 'react'
import Api from 'API/index'
import style from './style.css'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrList:[],
            arrHome:[]
        }
    }
    componentDidMount(){
        console.log(this)
        this.getList()
        this.getHomeList()
    }
    getList() {
        Api.getBaozouList().then(res => {
            return res.json()
        }).then(result => {
            let {code,data} = result
            this.setState({
                arrList: data
            })
        })
    }
    getHomeList() {
        Api.getHomeList().then(res => {
            return res.json()
        }).then(result => {
            let {code,body} = result
            const {goodsList} =body
            this.setState({
                arrHome:goodsList
            })
        })
    }
    render() {
        // console.log(this)
        return (
            <div className={style.wrap}>
                <h3>呼呼配置千奇百怪,查阅大量资料，有时候也不是很清楚只能走一步是一步 hhhhh</h3>
                <ul>
                    {
                        this.state.arrList.map((val, i) =>{
                            return  <li key={val.goodsId}>
                                <img src={val.goodsImage}/>
                                <img src={val.goods.brandLogo} alt=""/>
                                <span>{val.goods.brandName}</span>
                                <span>{val.goods.introduce}</span>
                                <img src={val.goods.countryCode.flagImage} alt=""/>
                                <span className="price">价格：￥{val.goods.marketPrice}</span>
                                <p className="des">{val.goods.title}</p>
                                <p className="address">{val.goods.goodsSource}</p>
                            </li>

                        })
                    }
                </ul>
                <ul>
                    {
                        this.state.arrHome.map((v,i) => {
                           return <li key={v.goodsId}>
                               <a href={`https://m.kaola.com/product/${v.goodsId}.html?ri=homepage&zid=7&zp=${++i}&zn=hotsku`}>
                               <img src={v.imageUrlFor430} alt=""/>
                               <div className={style.des}>
                                   <p>{v.searchCleanTitle}</p>
                                   <p className={style.tag}>
                                       <span>{v.danpinPromotionTitle}</span>
                                       <span>APP价格:￥{v.actualCurrentPrice}元</span>
                                       <span>市场价:￥<del>{v.marketPrice}</del></span>
                                   </p>
                               </div>
                               </a>
                           </li>
                        })
                    }
                </ul>

            </div>
        )
    }
}