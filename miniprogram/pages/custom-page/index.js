// pages/custom-page/index.js

import pageApi from "../../api/page"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {code} = options
    pageApi.detail(code).then(res=>{
      const page = res.data[0]
      this.setData({
        page
      })
      wx.setNavigationBarTitle({
        title: page.title,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})