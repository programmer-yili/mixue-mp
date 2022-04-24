// app.ts
import userApi from './api/user'

App({
  globalData: {
  },
  onLaunch() {
    if(!this.isLogin()) {
      this.checkUser()
    }
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