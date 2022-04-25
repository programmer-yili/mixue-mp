import {db} from './cloud-init'
const _ = db.command

const list = (longitude, latitude) => {
  return db.collection('store').where({
    location: _.geoNear({
      geometry: db.Geo.Point(longitude, latitude),
      maxDistance: 5000
    }) 
  }).limit(10).get()
}


export default {
  list
}