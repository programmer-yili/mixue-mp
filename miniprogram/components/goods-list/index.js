// components/goods-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true 
  }, 
  properties: {
    list: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onScroll(e) {
      const rootTop = e.target.offsetTop
      this.createSelectorQuery().selectAll('.section').boundingClientRect(
        rects => {
          const result = rects.find(item=>{
            return item.top <= rootTop && item.bottom >= rootTop
          })
          !result || this.changeIndex(result.dataset.index)
        }
      ).exec()
    },
    changeIndex(index) {
      this.setData({
        index
      })
      this.triggerEvent('on-change', {index})
    }
  }
})
