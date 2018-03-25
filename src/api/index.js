

export default {
    getBaozouList() {
        return fetch('/activity/h5/getActivityBottomRecommendGoodsModule/goods/23869.html')
    },
    getHomeList() {
        return fetch('/homeHotGoods.html?pageNo=0&pageSize=16')
    }
}