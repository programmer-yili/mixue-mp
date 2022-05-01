import {db} from './cloud-init'

const list = () => {
  return db.collection('goods_category').get()
}

export default {
  list
}