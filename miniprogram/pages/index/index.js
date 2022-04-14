// pages/index/index.ts

import swiper from "../../api/swiper"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    current: 0,
    memberInfo: false
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

  onShow() {
    this.loadMemberInfo();
  },

  loadMemberInfo() {
    console.log(wx.getStorageSync('phoneNumber'))
    if (wx.getStorageSync('phoneNumber')) {
      this.setData({
        memberInfo: true
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