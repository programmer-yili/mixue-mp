import { observable, action } from "mobx-miniprogram";

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

export const chart = observable({
  list: [],
  get totalPrice() {
    let totalPrice = 0
    this.list.forEach(item=>{
      totalPrice += item.price
      let specsPrice = 0
      item.specs.forEach(specs=>{
        specsPrice += specs.price
      })
      totalPrice += specsPrice
    })
    return totalPrice;
  },
  addChart: action(function(goods){
    this.list = [...this.list, goods]
  }),
  removeChart: action(function(goods) {
    this.list = this.list.filter(item => !isObjectEquels(item, goods))
  })
})