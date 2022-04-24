import {db} from './cloud-init'
const list = () => {
  return db.collection('mx_swiper').get();
}

export default {
  list
}