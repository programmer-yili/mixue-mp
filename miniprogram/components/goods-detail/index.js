import specsCategoryApi from "../../api/specs-category"

// components/goods-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: null,
      observer: function (newValue){
        this.fetchSpecsCategories(newValue['specs_categories'])
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    specsCategories: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async fetchSpecsCategories(categoryIds) {
      const result = await specsCategoryApi.list(categoryIds)
      const specsCategories = result.result
      this.setData({
        specsCategories
      })
    }
  }
})
