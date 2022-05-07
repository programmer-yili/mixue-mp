import { configure } from 'mobx-miniprogram'

// 引入模型
export { user } from './user'

export { global } from './global'

export { chart } from './chart'


configure({ enforceActions: "observed" });