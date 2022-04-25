import { configure } from 'mobx-miniprogram'

// 引入模型
export { user } from './user'


configure({ enforceActions: "observed" });