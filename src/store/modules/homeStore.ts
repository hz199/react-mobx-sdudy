import { observable, action } from 'mobx'

class HomeStore {
  @observable homeNum = 0

  @action handle () {
    this.homeNum ++
  }
}
export default HomeStore