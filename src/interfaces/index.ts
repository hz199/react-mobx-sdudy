import { RouteComponentProps } from 'react-router-dom'
import HomeStore from '../store/modules/homeStore'

export interface IHome extends RouteComponentProps{
  homeStore: HomeStore
}