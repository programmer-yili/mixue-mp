// pages/me/index.ts
import {userBehavior} from '../../behaviors/user-behavior'
Page({
  behaviors: [userBehavior],
  /**
   * 页面的初始数据
   */
  data: {
  },
  gotoCustomPage(e) {
    const {code} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/custom-page/index?code=${code}`,
    })
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})