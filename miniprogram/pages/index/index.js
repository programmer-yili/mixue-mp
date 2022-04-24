// pages/index/index.ts
import swiper from "../../api/swiper"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    current: 0,
    memberInfo: false,
    user: null
  },

  onSwiperChange(e) {
    const { current } = e.detail
    this.setData({
      current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    swiper.list().then(res=>{
      this.setData({
        swiperList: res.data
      })
    })



  },
  onMenuCardClick() {
    wx.switchTab({
      url: '/pages/menu/index',
    })
  },

  onArticleClick() {
    wx.navigateTo({
      url: '/pages/web-view/index?url=https://baidu.com',
    })
  },

  onShow() {
    if (!this.data.user) {
      const user = wx.getStorageSync('user')
      this.setData({
        user
      })
    }
  },


  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },

  onSwiperTab(e) {
    const { item } = e.currentTarget.dataset
    item.type === 'url'
    ? wx.navigateTo({
      url: `/pages/web-view/index?url=${item.target}`,
    }) : wx.navigateTo({
      url: `/pages/product/detail?id=${item.target}`,
    })
  },
})