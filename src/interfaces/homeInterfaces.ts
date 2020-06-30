import { RouteComponentProps } from 'react-router-dom'
import HomeStore from '../stores/modules/homeStore'

export interface IHome extends RouteComponentProps {
  homeStore: HomeStore
}
