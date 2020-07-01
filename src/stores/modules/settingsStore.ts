import { observable, action } from 'mobx'

class SettingsStore {
  @observable screenWidth = 0

  @action setScreenWidth (width: number) {
    this.screenWidth = width
  }
}
export default SettingsStore