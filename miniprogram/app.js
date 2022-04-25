// app.ts
import userApi from './api/user'

import {userBehavior} from './behaviors/user-behavior'

App({
  behaviors: [],
  globalData: {
  },
  onLaunch() {
    if(!this.isLogin()) {
      this.checkUser()
    }
  },
  loadCurrentLocation() {
    this.updateLocation()
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.setStorageSync('location', { longitude, latitude })
        this.updateLocation()
      }
     })
  },
  isLogin() {
    return Boolean(wx.getStorageSync('user'))
  },
  checkUser () {
    wx.showLoading({
      title: '正在检查登录',
    })
    userApi.me().then(res=>{
        if(res.data.length) {
          wx.setStorageSync('user', res.data[0])
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
        wx.hideLoading()
    })
  }
})