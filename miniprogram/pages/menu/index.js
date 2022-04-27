// pages/menu/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerStyle: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.makeHeaderStyle();
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