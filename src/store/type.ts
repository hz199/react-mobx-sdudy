import { RouteComponentProps } from 'react-router-dom'

export interface IRouterBase extends RouteComponentProps<{}> {
  router: RouterStore
}