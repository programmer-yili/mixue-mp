// components/sidebar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    defaultCurrent: {
      type: Number,
      value: 0
    }
  },
  observers: {
    'defaultCurrent': function(defaultCurrent) {
      this.data.current === defaultCurrent || this.setData({
        current: defaultCurrent
      })
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
      this.triggerEvent('on-change', { index: current })
    }
  }
})
