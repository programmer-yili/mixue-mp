import { observable, action } from "mobx-miniprogram";
import specsCategoryApi from "../api/specs-category"

const isObjectEquels = (obj1, obj2) => {
  let flag = true;
  Object.keys(obj2).forEach((item)=>{
    if(isObject(obj2[item])) {
      flag = isObjectEquels(obj1[item], obj2[item])
    }
    if(obj2[item] !== obj1[item]) {
      flag = false
    }
  })
  return flag
}

const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

const fetchSpecsCategories = async (categoryIds) => {
  const result = await specsCategoryApi.list(categoryIds)
  const specsCategories = result.result.map(item=>{
    item.specsIndex =  0
    return item
  })
  this.setData({
    specsCategories
  })
  this.calculateTotalPrice()
}

export const chart = observable({
  selectedGoods: null,
  list: [],
  get totalPrice() {
    let totalPrice = 0
    this.list.forEach(item=>{
      totalPrice += (item.price * item.count)
      let specsPrice = 0
      item.specs.forEach(specs=>{
        specsPrice += (specs.price * item.count)
      })
      totalPrice += specsPrice
    })
    return totalPrice;
  },
  addChart: action(function(goods){
    let item = this.list.find(item=>item._id===goods._id);
    if(item=== undefined) {
      goods.specsList = goods.specs.map(item=>{
        return item['label']
      }).toString().replaceAll(',','/')
      goods.count = 1
      this.list = [...this.list, goods]
    } else {
      const list = this.list.map(item2=>{
        if(item2._id === goods._id) {
          item2.count = item2.count + 1;
        }
        return item2
      })
      this.list = list
    }

  }),
  removeChart: action(function(goods) {
    this.list = this.list.filter(item => !isObjectEquels(item, goods))
  }),
  selectGoods: action(async function(goods) {
    this.selectedGoods = goods
  })
})