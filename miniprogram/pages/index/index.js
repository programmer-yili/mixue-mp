// pages/index/index.ts
import storeApi from "../../api/store";
import swiper from "../../api/swiper"
import { userBehavior } from "../../behaviors/user-behavior";

Page({
  behaviors: [ userBehavior ],
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    memberInfo: false,
    nearbyStore: null
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    const {location} = this.data.user
    storeApi.list(location.longitude, location.latitude).then(res=>{
    
        !res.data.length || (this.setData({nearbyStore: res.data[0]}))
    })
  },
  onLoad() {
    swiper.list().then(res=>{
      this.setData({
        swiperList: res.data
      })
    })
  },
  onMenuCardClick() {
    wx.switchTab({
      url: '/pages/store/index',
    })
  },

  onArticleClick() {
    wx.navigateTo({
      url: '/pages/web-view/index?url=https://baidu.com',
    })
  },

  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})