import {cloud} from './cloud-init'

const list = (categoryIds) => {
  return cloud.callFunction({
    name: 'specs-category-with-specs',
    data: {
      ids: categoryIds
    }
  })
}

export default {
  list
}