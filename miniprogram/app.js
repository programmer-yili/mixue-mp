// app.ts
App({
  globalData: {},
  onLaunch() {
    wx.cloud.init();
    // 展示本地存储能力
  },
})