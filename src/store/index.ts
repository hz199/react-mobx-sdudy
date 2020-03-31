import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { createBrowserHistory } from 'history'
import HomeStore from './modules/homeStore'

const browserHistory = createBrowserHistory()
const routerStore =  new RouterStore()
// 同步路由与 mobx 的数据状态
export const history = syncHistoryWithStore(browserHistory, routerStore)

const stores = {
  homeStore: new HomeStore(),
  routerStore
}

export default stores