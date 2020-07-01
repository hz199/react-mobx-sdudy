import { RouteComponentProps } from 'react-router-dom'
import SettingsStore from '../stores/modules/settingsStore'

export interface IAppProps extends RouteComponentProps {
  settingsStore: SettingsStore
}

/**
 * Drawer组件显示的位置
 */
type Placement = 'left' | 'right'

export interface IAppState {
  collapsed: boolean
  placement: Placement
  drawerVisible: boolean
}