import storeApi from "../../api/store"
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
const computedBehavior = require('miniprogram-computed').behavior
const key = '5SOBZ-SJDL6-J47SK-MNS4A-OY7J2-4VBKA'
const chooseLocation = requirePlugin('chooseLocation');

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
    },
    storeDetailShow: false,
    currentStore: null,
    collapse: false,
    mapKey: key
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

  onShow() {

    const location  = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (location) {
      const { latitude, longitude } = location
      this.setData({
        latitude,
        longitude
      })
      this.fetchStoreList();
    }

  },

  onUnload () {
    chooseLocation.setLocation(null);
},

onMarkerTab(e) {
  const { markerId } = e.detail
  const store = this.data.storeList[markerId-1]
  this.setData({
    storeDetailShow: true,
    currentStore: store
  })
},


  chooseLocation() {
    const key = this.data.mapKey
    const referer = '程序猿依力'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: this.data.latitude,
      longitude: this.data.longitude
    });
     
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location
    });
    
  },

  



  popupStoreDetail(e) {
    const { store } = e.currentTarget.dataset
    this.setData({
      storeDetailShow: true,
      currentStore: store
    })
  },
  colsapse() {
    this.setData({
      collapse: !this.data.collapse
    })
  },
  initMapSdk() {
    this.mapSdk = new QQMapWX({key})
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
    if(storeList.length === 0) {
      this.setData({
        storeList: []
      })
    }


    const locationList = storeList.map(item =>{
      const location = item.location
      return {
        latitude: location.latitude,
        longitude: location.longitude,
      }
    })
    this.mapSdk.calculateDistance({
      from: {
        latitude: this.data.latitude,
        longitude: this.data.longitude,
      },
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
    this.loadCurrentLocation()
  }
})