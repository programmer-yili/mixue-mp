import { observable, action } from "mobx-miniprogram";

const userInStorage = wx.getStorageSync('user')
const locationInStorage = wx.getStorageSync('location')



export const user = observable({
  phoneNumber: (userInStorage ? userInStorage.phone_number : null ),

  location: (locationInStorage ? locationInStorage: null ),

  get desensitiveMobile() {
    let mobile = this.phoneNumber
    if (mobile) {
      mobile = mobile.replace(/^(\d{3})\d{6}(\d{2})$/, "$1******$2")
    }
    return mobile
  },

  get isLogin() {
    return Boolean(this.phoneNumber)
  },
  updatePhoneNumber: action(function () {
    this.phoneNumber = userInStorage ? userInStorage.phone_number : null
  }),
  updateLocation: action(()=>{
    this.location = locationInStorage ? locationInStorage: null
  })
});
