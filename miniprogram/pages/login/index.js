// pages/login/index.js
Page({

  data: {
  },

  onLoad: function (options) {
  },
  login(e) {
    const cloudId = e.detail.cloudID
    wx.cloud.callFunction({
      name: 'get-phone-number',
      data: {
        weRunData: wx.cloud.CloudID(cloudId), // 这个 CloudID 值到云函数端会被替换
      }
    }).then(res=>{
        wx.setStorageSync("phoneNumber", res.result)
        wx.navigateBack({
          delta: 0,
        })
    })
  },
})