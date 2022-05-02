// pages/menu/index.ts
import { userBehavior } from '../../behaviors/user-behavior'
import swiperApi from '../../api/swiper'
import goodsApi from '../../api/goods'
import goodsCategoryApi from '../../api/goods-category'

Page({
  behaviors: [userBehavior],
  data: {
    headerStyle: '',
    swiperList: [],
    goodsList: [],
    currentCategoryIndex: 0,
    sidebarCurrent: 0
  },
  onLoad(options) {
    this.makeHeaderStyle();
    this.fetchSwiperList();
    this.fetchData();
  },

  onSideBarChange(e) {
    this.setData({
      currentCategoryIndex: e.detail.index
    })
  },
  onGoodsListChange(e) {
    this.setData({
      sidebarCurrent: e.detail.index
    })
  },


  fetchData() {
    goodsApi.listWithCategory().then(res=> {
      this.setData({
        goodsList: res.result
      })
    })
  },
  fetchSwiperList() {
    swiperApi.list().then(res=>{
      this.setData({
        swiperList: res.data
      })
    })
  },
  switchCurrentStore() {
    this.setCurrentStore(null)
    wx.navigateBack({
      delta: 0,
    })
  },
  makeHeaderStyle() {
    const { top, bottom, height } = wx.getMenuButtonBoundingClientRect()
    const menuButtonCenterPoint = top + height/2
    const headerStyle = 'margin-top: calc(' + menuButtonCenterPoint + 'px - 32rpx);'
    this.setData({
      headerStyle
    })
  }
})