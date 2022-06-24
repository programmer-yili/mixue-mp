import specsCategory from "../../api/specs-category"
import specsCategoryApi from "../../api/specs-category"
import { userBehavior } from '../../behaviors/user-behavior'

// components/goods-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [userBehavior],

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
    specsCategories: [],
    totalPrice: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async fetchSpecsCategories(categoryIds) {
      const result = await specsCategoryApi.list(categoryIds)
      const specsCategories = result.result.map(item=>{
        item.specsIndex =  0
        return item
      })
      this.setData({
        specsCategories
      })
      this.calculateTotalPrice()
    },
    calculateTotalPrice() {
      let totalPrice = 0
      totalPrice += this.properties.goods.price

      this.data.specsCategories.forEach(item=>{
        !item.specs.length ||  (totalPrice += item.specs[item.specsIndex].price)
      })

      this.setData({
        totalPrice
      })
    },
    onSpecsTap(e) {
      const {specs, specsCategoryIndex} = e.target.dataset
      let specsCategories = this.data.specsCategories

      const index = specsCategories[specsCategoryIndex].specs.findIndex(item => item._id === specs._id)


      specsCategories[specsCategoryIndex].specsIndex = index

      this.setData({
        specsCategories
      })
      this.calculateTotalPrice()
    },
    add() {
      let goods = this.properties.goods
      let specs = []
      const specsCategories = this.data.specsCategories
      specsCategories.forEach(item => {
        specs.push(item.specs[item.specsIndex])
      });
      goods['specs'] = specs
      console.log(specs)
      this.addChart(goods)
    }
  }
})
