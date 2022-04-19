// pages/me/index.ts
const computedBehavior = require('miniprogram-computed').behavior
Page({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    mobile: ''
  },
  computed: {
    desensitiveMobile(data) {
      let mobile = data.mobile
      if (mobile) {
        mobile = mobile.replace(/^(\d{3})\d{6}(\d{2})$/, "$1******$2")
      }
      return mobile
    },
  },
  onShow() {
    const mobile = wx.getStorageSync('phoneNumber')
    this.setData({
      mobile
    })

  },
  login() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})