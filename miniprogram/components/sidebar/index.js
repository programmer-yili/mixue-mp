// components/sidebar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [
        1,2,3
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switch(e) {
      const {current} = e.currentTarget.dataset
      this.setData({
        current
      })
    }
  }
})
