import {db} from './cloud-init'

const create = ({ phoneNumber }) => {
  return db.collection('user').add({
    data: {
      phone_number: phoneNumber
    }
  })
}

const me = () => {
  return db.collection('user').get();
}

export default {
  create,
  me
}