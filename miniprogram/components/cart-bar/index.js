// components/chart/index.js
import { userBehavior } from '../../behaviors/user-behavior'

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [userBehavior],
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    showList: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickBag() {
      this.setData({
        showList: !this.data.showList
      })
    },
    onCartListHide() {
      this.setData({
        showList: false
      })
    }
  }
})
