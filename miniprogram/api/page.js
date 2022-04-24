import {db} from './cloud-init.js'

const detail = code => {
  return db.collection('page').where({
    code
  }).get()
}

export default {
  detail
}