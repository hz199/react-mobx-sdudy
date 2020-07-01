
import HomeStore from './modules/homeStore'
import SettingsStore from './modules/settingsStore'

const stores = {
  homeStore: new HomeStore(),
  settingsStore: new SettingsStore()
}

export default stores