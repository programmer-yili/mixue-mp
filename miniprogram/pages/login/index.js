import user from "../../api/user"
import userApi from "../../api/user"

// pages/login/index.js
Page({

  data: {
  },

  onLoad: function (options) {
    if(getApp().isLogin()) {
      wx.navigateBack({
        delta: 0,
  })
    }
  },
  login(e) {
    const cloudId = e.detail.cloudID
    wx.cloud.callFunction({
      name: 'get-phone-number',
      data: {
        weRunData: wx.cloud.CloudID(cloudId), // 这个 CloudID 值到云函数端会被替换
      }
    }).then(res => {
        const phoneNumber = res.result

        userApi.create({phoneNumber}).then(response=>{
            userApi.me().then(results=>{
              wx.setStorageSync('user', results.data[0])
              wx.navigateBack({
                    delta: 0,
              })
            })

        })
    })
  },
})