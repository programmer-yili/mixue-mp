import storeApi from "../../api/store"
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
const computedBehavior = require('miniprogram-computed').behavior

// pages/store/index.js
Page({
  behaviors: [computedBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    
    storeList: [],
    dict: {
      'OPENING': '营业中',
      'CLOSED': '已关闭'
    }
  },
  computed: {
    markers(data) {
      return data.storeList.map((item, index)=>{
        return {
          id: index + 1,
          key: item._id,
          title: item.name,
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          iconPath: '../../assets/images/marker.png',
          width: '55rpx', height: '69rpx'
        }
      })
    },
  },
  mapContext: null,
  mapSdk: null,


  onLoad: async function (options) {
    this.initMapSdk();
    await this.loadCurrentLocation()
    this.initMapContext()
  },
  initMapSdk() {
    this.mapSdk = new QQMapWX({key: 'XGBBZ-HYV6W-MJ3RA-OHQCA-FGNYS-2WFW4'})
  },
  fetchStoreList() {
    storeApi.list(this.data.longitude, this.data.latitude).then(res=>{
      this.makeStoreList(res.data)
    })
  },

  navigateLocation(e) {
    const {latitude, longitude} = e.currentTarget.dataset.location
    wx.openLocation({
      latitude,
      longitude
    })
  },

  call(e) {
    const { phone } = e.currentTarget.dataset
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },


  makeStoreList(storeList) {

    const locationList = storeList.map(item =>{
      const location = item.location
      return {
        latitude: location.latitude,
        longitude: location.longitude,
      }
    })
    this.mapSdk.calculateDistance({
      to: locationList,
      success: (res) => {
        storeList.forEach((item, key)=>{
          storeList[key]['distance'] = (res.result.elements[key].distance/1000).toFixed(2)
        })

        this.setData({
          storeList
        })
      }
    })
  },

  initMapContext() {
    wx.createSelectorQuery().select('#store-map').context((res) => {
      this.mapContext = res.context
      }).exec()
  },

  async loadCurrentLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        this.setData({
          latitude,
          longitude
        })
        this.fetchStoreList()
      }
     })
  },

  goToCurrentLocation() {
    this.mapContext.moveToLocation()
  }
})