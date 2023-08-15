import {CLOUD_ENV_ID} from '../config'
wx.cloud.init({
  env: CLOUD_ENV_ID
})
export const db = wx.cloud.database()

export const cloud = wx.cloud