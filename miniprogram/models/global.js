import { observable, action } from "mobx-miniprogram";


export const global = observable({
  currentStore: null,
  
  setCurrentStore: action(function(store){
    this.currentStore = store
  }),
})